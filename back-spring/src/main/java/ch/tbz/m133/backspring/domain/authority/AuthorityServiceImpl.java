package ch.tbz.m133.backspring.domain.authority;

import ch.tbz.m133.backspring.config.exceptions.AlreadyExistsException;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Data
@Service
public class AuthorityServiceImpl implements AuthorityService{

    private static final String NOTFOUND = "Authority with ID '%s' not found";

    private final AuthorityRepository repository;

    public AuthorityServiceImpl(AuthorityRepository repository) {
        this.repository = repository;
    }

    public List<Authority> getAllAuthorities() {
        return repository.findAll();
    }

    public Authority findById(String id) {
        return repository.findById(id).orElseThrow(() -> new NoSuchElementException(String.format(NOTFOUND, id)));
    }

    public Authority createNewAuthority(Authority newAuthority) throws AlreadyExistsException {
        if (!repository.existsById(newAuthority.getId())) {
            return repository.save(newAuthority);
        }
        else {
            throw new AlreadyExistsException("authority");
        }
    }

    public String deleteAuthority(String id){
        repository.findById(id).orElseThrow(() -> new NoSuchElementException(String.format(NOTFOUND, id)));
        repository.deleteById(id);
        return "Has been deleted";
    }

    public Authority updateAuthority(Authority authority){
        return repository.save(authority);

    }
}

package ch.tbz.m133.backspring.domain.user;

import ch.tbz.m133.backspring.config.exceptions.UserNameExistsException;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Data
@Service
public class UserServiceImpl{

    private static final String NOTFOUND = "User with ID '%s' not found";
    private final UserRepository repository;


    public List<User> getAllUsers() {
        return repository.findAll();
    }

    public User getUserById(Long id) {
        return repository.findById(id).orElseThrow(() -> new NoSuchElementException(String.format(NOTFOUND, id)));
    }

}

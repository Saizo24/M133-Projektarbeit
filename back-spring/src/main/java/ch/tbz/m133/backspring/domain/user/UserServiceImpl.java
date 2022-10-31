package ch.tbz.m133.backspring.domain.user;

import ch.tbz.m133.backspring.config.exceptions.UserExistsException;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Data
@Service
public class UserServiceImpl implements UserService{

    private static final String NOTFOUND = "User with ID '%s' not found";
    private final UserRepository repository;


    public List<User> getAllUsers() {
        return repository.findAll();
    }

    @Override
    public User getUserById(Long id) {
        return repository.findById(id).orElseThrow(() -> new NoSuchElementException(String.format(NOTFOUND, id)));
    }

    @Override
    public User createUser(User user) throws UserExistsException{
        if (!repository.existsById(user.getId())) {
            User newUser = new User();
            newUser.setName(user.getName());
            newUser.setPassword(user.getPassword());
            newUser.setRoles(user.getRoles());
            return newUser;
        }
        else {
            throw new UserExistsException();
        }
    }

    @Override
    public String deleteUser(Long id){
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return "User has been deleted";
        }
        else {
            return new NoSuchElementException(String.format(NOTFOUND, id)).toString();
        }
    }

    @Override
    public User updateUser(Long id, User user) {
        return repository.save(user);
    }
}

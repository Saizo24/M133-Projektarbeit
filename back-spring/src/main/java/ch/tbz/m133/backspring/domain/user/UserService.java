package ch.tbz.m133.backspring.domain.user;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();

    User getUserById(Long id);

    User createUser (User user);

    String deleteUser(Long id);

    User updateUser(Long id, User user);

}

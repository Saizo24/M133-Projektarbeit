package ch.tbz.m133.backspring.domain.user;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();

    User getUserById(Long id);

    User createUser (User user);

    User removeUserById(Long id);

    User updateUserById(Long id, User user);

}

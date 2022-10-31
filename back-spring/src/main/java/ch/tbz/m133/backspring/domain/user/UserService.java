package ch.tbz.m133.backspring.domain.user;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();

    User getUserById(String id);

    User createUser (User user);

    String deleteUser(String id);

    User updateUser(String id, User user);

}

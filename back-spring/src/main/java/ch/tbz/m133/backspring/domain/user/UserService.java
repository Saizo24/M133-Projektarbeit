package ch.tbz.m133.backspring.domain.user;

import ch.tbz.m133.backspring.domain.picture.Picture;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {
    List<User> getAllUsers();

    User getUserByName(String username);

    User createUser (User user);

    String deleteUser(String id);

    User updateUser(String id, User user);

    User addPictureToUser(Picture picture, String username);

    void deletePictureById(String username, String id);



}

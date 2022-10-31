package ch.tbz.m133.backspring.domain.user;

import ch.tbz.m133.backspring.domain.picture.Picture;
import ch.tbz.m133.backspring.domain.picture.PictureServiceImpl;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Set;

@Data
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private final UserServiceImpl userService;


    @GetMapping("/")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById
        (@PathVariable("id") String id) {
        return ResponseEntity.ok().body(userService.getUserById(id));
    }

    @PostMapping("/")
    public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
        return ResponseEntity.ok().body(userService.createUser(user));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") String id) {
        return ResponseEntity.ok().body(userService.deleteUser(id));
    }

    @GetMapping("/{username}")
    public Set<Picture> getAllPicturesFromUser(@PathVariable("username") String username) {
        return userService.getAllPictures(username);
    }

    @PostMapping("/{username}")
    public ResponseEntity<User> addPictureToUserList(@PathVariable("username") String username, @Valid @RequestBody Picture picture) {
        return ResponseEntity.ok().body(userService.addPictureToUser(picture, username));
    }

    @DeleteMapping("/{username}/{id}")
    public void deletePictureFromUserList(@PathVariable("username") String username, @PathVariable("id") String id) {
        userService.deletePictureById(username, id);
    }
}

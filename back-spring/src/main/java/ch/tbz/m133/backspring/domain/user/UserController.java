package ch.tbz.m133.backspring.domain.user;

import ch.tbz.m133.backspring.domain.picture.Picture;
import lombok.Data;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Set;

@Data
@RestController
@Log4j2
@RequestMapping("/users")
public class UserController {

    @Autowired
    private final UserServiceImpl userService;


    @GetMapping("/")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{username}")
    public ResponseEntity<User> getUserByName
        (@PathVariable("username") String username) {
        return ResponseEntity.ok().body(userService.getUserByName(username));
    }

    @PostMapping("/register")
    public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
        return ResponseEntity.ok().body(userService.createUser(user));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") String id) {
        return ResponseEntity.ok().body(userService.deleteUser(id));
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping("/{username}/")
    public Set<Picture> getAllPicturesFromUser(@PathVariable("username") String username) {
        return userService.getAllPictures(username);
    }

    @PutMapping("/{username}")
    public void addPictureToUserList(@PathVariable("username") String username, @Valid @RequestBody Picture picture) {
        userService.addPictureToUser(picture, username);
    }

    @DeleteMapping("/{username}/{id}")
    public void deletePictureFromUserList(@PathVariable("username") String username, @PathVariable("id") String id) {
        userService.deletePictureById(username, id);
    }
}

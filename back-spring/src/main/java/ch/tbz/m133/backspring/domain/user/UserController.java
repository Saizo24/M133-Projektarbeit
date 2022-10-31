package ch.tbz.m133.backspring.domain.user;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Data
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private final UserServiceImpl service;

    @GetMapping("/")
    public List<User> getAllUsers() {
        return service.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById
        (@PathVariable("id") String id) {
        return ResponseEntity.ok().body(service.getUserById(id));
    }

    @PostMapping("/{id}")
    public ResponseEntity<User> createUser(@PathVariable("id") String id, @Valid @RequestBody User user) {
        return ResponseEntity.ok().body(service.createUser(user));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") String id) {
        return ResponseEntity.ok().body(service.deleteUser(id));
    }
}

package ch.tbz.m133.backspring.domain.user;

import ch.tbz.m133.backspring.config.exceptions.AlreadyExistsException;
import ch.tbz.m133.backspring.domain.picture.Picture;
import ch.tbz.m133.backspring.domain.picture.PictureServiceImpl;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Data
@Service
public class UserServiceImpl implements UserService{

    private static final String NOTFOUND = "User with ID '%s' not found";
    private final UserRepository repository;
    private final PictureServiceImpl pictureService;

    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository repository, PictureServiceImpl pictureService, PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.pictureService = pictureService;
        this.passwordEncoder = passwordEncoder;
    }
    public List<User> getAllUsers() {
        return repository.findAll();
    }

    @Override
    public User getUserByName(String username) {
        return repository.findByName(username);
    }

    @Override
    public User createUser(User user) throws AlreadyExistsException {
        if (!repository.existsById(user.getId())) {
            User newUser = new User();
            newUser.setId(user.getId());
            newUser.setName(user.getName());
            newUser.setPassword(passwordEncoder.encode(user.getPassword()));
            newUser.setRoles(user.getRoles());
            newUser = repository.save(newUser);
            return newUser;
        }
        else {
            throw new AlreadyExistsException("username");
        }
    }

    @Override
    public String deleteUser(String id){
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return "User has been deleted";
        }
        else {
            return new NoSuchElementException(String.format(NOTFOUND, id)).toString();
        }
    }

    @Override
    public User updateUser(String id, User user) {
        return repository.save(user);
    }

   public Set<Picture> getAllPictures(String username) {
       User user = repository.findByName(username);
       return user.getPictures();
   }

   @Override
   public User addPictureToUser(Picture picture, String username) {
        User user = repository.findByName(username);
        user.getPictures().add(picture);
        return repository.save(user);
   }

   @Override
   public void deletePictureById(String username, String id) {
        User user = repository.findByName(username);
        Picture pictureToBeDeleted = null;
        for (Picture picture : user.getPictures()) {
            if (picture.getId().equals(id)) {
                pictureToBeDeleted = picture;
                break;
            }
        }
        if(pictureToBeDeleted != null) {
            user.getPictures().remove(pictureToBeDeleted);
        }
   }
    @Override
    public org.springframework.security.core.userdetails.User loadUserByUsername(String username)
        throws UsernameNotFoundException {
        User user = repository.findByName(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        user.getRoles().forEach(role -> role.getAuthorities()
            .forEach(authority -> authorities.add(new SimpleGrantedAuthority(authority.getName()))));
        return new org.springframework.security.core.userdetails.User(user.getName(), user.getPassword(), authorities);
    }
}

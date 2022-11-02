package ch.tbz.m133.backspring.domain.picture;

import ch.tbz.m133.backspring.config.exceptions.AlreadyExistsException;
import ch.tbz.m133.backspring.domain.user.User;
import ch.tbz.m133.backspring.domain.user.UserRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@Data
public class PictureServiceImpl implements PictureService {

  private final PictureRepository repository;

  @Autowired
  public PictureServiceImpl(PictureRepository repository) {
    this.repository = repository;
  }

  @Override
  public Picture createPicture(Picture picture) {
    Picture newPicture = new Picture();
    newPicture.setId(null);
    newPicture.setImageId(picture.getImageId());
    newPicture.setBaseURL(picture.getBaseURL());
    newPicture.setTitle(picture.getTitle());
    newPicture.setOwner(picture.getOwner());
    repository.save(newPicture);
    newPicture = repository.findFirstByImageIdAndBaseURL(newPicture.getImageId(), newPicture.getBaseURL());
    return newPicture;
  }

  public void deletePictureById(String id) {
    repository.deleteById(id);
  }
}

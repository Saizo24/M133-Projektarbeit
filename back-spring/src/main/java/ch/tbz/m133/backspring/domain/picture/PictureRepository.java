package ch.tbz.m133.backspring.domain.picture;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PictureRepository  extends JpaRepository<Picture, String> {
  Picture findFirstByImageIdAndBaseURL(String imageId, String baseURL);

}

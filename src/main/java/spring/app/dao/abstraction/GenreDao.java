package spring.app.dao.abstraction;

import spring.app.model.Genre;
import spring.app.model.OrgType;
import spring.app.model.Song;

import java.sql.Timestamp;
import java.util.List;

public interface GenreDao extends GenericDao<Long, Genre> {
    Genre getByName(String name);

    List<Genre> getByCreatedDateRange(Timestamp dateFrom, Timestamp dateTo);

    List<Genre> getAllApproved();

    List<Song> getSongsByGenre(Genre genreForDelete);


    void deleteReferenceFromCompanyByGenre(Genre genreForDelete);

    void deleteReferenceFromOrgTypeByGenre(Genre genreForDelete);
}


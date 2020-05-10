package spring.app.dao.impl.dto;

import org.hibernate.Query;
import org.hibernate.transform.ResultTransformer;
import org.springframework.stereotype.Repository;
import spring.app.dao.abstraction.dto.SongDtoDao;
import spring.app.dto.AuthorDto;
import spring.app.dto.SongDto;
import spring.app.dto.SongDtoTop;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.sql.Timestamp;
import java.util.*;

@Repository
public class SongDtoDaoImpl implements SongDtoDao {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<SongDto> getAll() {
        List<SongDto> songDtos = entityManager.createQuery(
                "SELECT new spring.app.dto.SongDto(s.id, s.name, s.isApproved, s.author.name, s.genre.name) FROM Song s",
                SongDto.class
        )
                .getResultList();

        return songDtos;
    }

    @Override
    public List<SongDtoTop> getTopSongsByNumberOfList(Timestamp startTime,Timestamp endTime  ) {
        List<SongDtoTop> songDtos = entityManager.createQuery(
                "SELECT s.id , s.name , s.author.name " +
                        "FROM OrderSong o LEFT JOIN o.song s where o.timestamp > :startTime  and o.timestamp < :endTime  "
        )
                .unwrap(Query.class)
                .setParameter("startTime", startTime)
                .setParameter("endTime", endTime)
                .setResultTransformer(new SongDtoTopListTransformer())
                .list();

        return songDtos;
    }

    private class SongDtoTopListTransformer implements ResultTransformer {
        private List<SongDtoTop> roots = new ArrayList<>();
        private Map<Long, Long> idMap = new HashMap<>();

        @Override
        public Object transformTuple(Object[] tuple, String[] strings) {
            long songId = (long) tuple[0];
            String name =  (String) tuple[1];
            String authorName = (String) tuple[2];

            SongDtoTop songDtoTop = new SongDtoTop(songId, name, authorName);

            if (!idMap.containsKey(songId)) {
                roots.add(songDtoTop);
                idMap.put(songId,0L);
            }

             idMap.put(songId,(idMap.get(songId)+1L));
            return songDtoTop;
        }

        @Override
        public List transformList(List list) {
            for (SongDtoTop songDtoTop : roots) {
                Long amount = idMap.get(songDtoTop.getId());
                songDtoTop.setAmount(amount);
            }

            return roots;
        }
    }
}

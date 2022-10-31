package ch.tbz.m133.backspring.domain.role;

import ch.tbz.m133.backspring.config.exceptions.AlreadyExistsException;
import lombok.Data;
import org.springframework.stereotype.Service;
import ch.tbz.m133.backspring.domain.authority.AuthorityRepository;

import java.util.List;
import java.util.NoSuchElementException;

@Data
@Service
public class RoleServiceImpl implements RoleService{

    private static final String NOTFOUND = "Role with ID '%s' not found";

    private final RoleRepository roleRepository;
    private final AuthorityRepository authorityRepository;
    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

    public Role findById(String id) {
        return roleRepository.findById(id).orElseThrow(() -> new NoSuchElementException(String.format(NOTFOUND, id)));
    }

    public Role createNewRole(Role newRole) throws AlreadyExistsException {
        if (!roleRepository.existsById(newRole.getId())) {
            return roleRepository.save(newRole);
        }
        else {
            throw new AlreadyExistsException("Role");
        }
    }

    public Role addAuthorityToRole(String roleId, String authorityId) {
        Role role = roleRepository.findById(roleId).orElseThrow(() -> new NoSuchElementException(String.format(NOTFOUND, roleId)));
        role.getAuthorities().add(authorityRepository.findById(authorityId).orElseThrow(() ->
            new NoSuchElementException("Authority")));
        return roleRepository.save(role);
    }

    public String deleteRole(String id) {
        roleRepository.findById(id).orElseThrow(() -> new NoSuchElementException(String.format(NOTFOUND, id)));
        roleRepository.deleteById(id);
        return "Has been deleted";
    }

    public Role updateRole(Role role){
        return roleRepository.save(role);

    }
}

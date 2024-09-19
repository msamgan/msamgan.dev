import ResponsiveNavLink from '@/Components/ResponsiveNavLink.jsx'
import { hasPermission } from '@/Utils/methods.js'
import { permissions } from '@/Utils/permissions/index.js'

export default function TopHeaderDropdown({ user }) {
    return (
        <li className="nav-item navbar-dropdown dropdown-user dropdown">
            <a className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown">
                <div className="avatar avatar-online">
                    <img src="../../assets/img/avatars/1.png" alt="user-image" className="rounded-circle" />
                </div>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
                <li>
                    <a className="dropdown-item" href="#">
                        <div className="d-flex">
                            <div className="me-2 flex-shrink-0">
                                <div className="avatar avatar-online">
                                    <img
                                        src="../../assets/img/avatars/1.png"
                                        alt="user-image"
                                        className="rounded-circle"
                                    />
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                <span className="fw-medium d-block">{user.name}</span>
                                <small className="text-muted">{user.role.display_name}</small>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <div className="dropdown-divider"></div>
                </li>
                <li>
                    <ResponsiveNavLink className="dropdown-item" href={route('profile.edit')}>
                        <i className="ri-user-3-line me-3 mt-1"></i>
                        <span className="align-middle">My Profile</span>
                    </ResponsiveNavLink>
                </li>
                {user.business_id && hasPermission(user, permissions.business.update) && (
                    <li>
                        <ResponsiveNavLink className="dropdown-item" href={route('business.settings')}>
                            <i className="ri-settings-3-line me-3 mt-1"></i>
                            <span className="align-middle">Business Settings</span>
                        </ResponsiveNavLink>
                    </li>
                )}
                {/*<li>
                            <a className="dropdown-item" href="#">
                                <span className="d-flex align-items-center align-middle">
                                    <i className="ri-file-text-line me-3 flex-shrink-0"></i>
                                    <span className="flex-grow-1 align-middle">Billing</span>
                                    <span className="badge badge-center rounded-pill bg-danger flex-shrink-0">4</span>
                                </span>
                            </a>
                        </li>*/}
                <li>
                    <div className="dropdown-divider"></div>
                </li>
                <li>
                    <ResponsiveNavLink className={'dropdown-item'} method="post" href={route('logout')} as="button">
                        <i className="ri-shut-down-line me-3 mt-1"></i>
                        <span className="align-middle">Log Out</span>
                    </ResponsiveNavLink>
                </li>
            </ul>
        </li>
    )
}

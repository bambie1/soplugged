import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { signIn, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBuilding,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";

import AuthPageWrapper from "@/components/AuthPageWrapper";

import styles from "./Dashboard.module.scss";

const dashboardLinks = [
  { id: 1, href: "/dashboard", text: "Business", icon: faBuilding },
  { id: 2, href: "/dashboard/favorites", text: "Favorites", icon: faHeart },
  { id: 3, href: "/dashboard/profile", text: "Profile", icon: faUserCircle },
];

const Dashboard: FC = ({ children }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading or not authenticated...</p>;
  }

  if (!session?.user) {
    signIn();
    return null;
  }

  const linkStyles = (href: string) => {
    if (router.asPath === href) return `${styles.link} ${styles.active}`;

    return styles.link;
  };

  return (
    <>
      <div className={styles.body}>
        <AuthPageWrapper center>
          <div className={styles.wrapper}>
            <nav className={styles.nav}>
              <ul className="list">
                {dashboardLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href}>
                      <a className={linkStyles(link.href)}>
                        <FontAwesomeIcon icon={link.icon} />
                        <span>{link.text}</span>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.content}>{children}</div>
          </div>
        </AuthPageWrapper>
      </div>
    </>
  );
};

export default Dashboard;

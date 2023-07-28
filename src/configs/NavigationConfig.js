import {
  DashboardOutlined,
  FileTextOutlined,
  PieChartOutlined,
  EnvironmentOutlined,
  AntDesignOutlined,
  SafetyOutlined,
  StopOutlined,
  DotChartOutlined,
  MailOutlined,
  MessageOutlined,
  CalendarOutlined,
  BulbOutlined,
  InfoCircleOutlined,
  CompassOutlined,
  LayoutOutlined,
  DesktopOutlined,
  FileDoneOutlined,
  CommentOutlined,
  RobotOutlined,
  PlusCircleOutlined,
  FundOutlined,
  ShoppingCartOutlined,
  BookOutlined,
  FileUnknownOutlined,
  ProfileOutlined,
  AppstoreOutlined,
  QuestionCircleOutlined,
  QrcodeOutlined,
} from "@ant-design/icons";
import {
  HiColorSwatch,
  HiOfficeBuilding,
  HiBriefcase,
  HiTable,
  HiSupport,
  HiPuzzle,
} from "react-icons/hi";
import {
  AiFillAppstore,
  AiFillQuestionCircle,
  AiFillPieChart,
} from "react-icons/ai";
import { BiSolidUserPlus } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from "configs/AppConfig";
import requete from "./icon/requete.svg";

const componentsNavTree = [
  {
    key: "components-general",
    permission: "user@gmail.com",
    title: ".",
    breadcrumb: true,
    submenu: [
      {
        key: "components-general-button",
        path: `${APP_PREFIX_PATH}/users/dashboards`,
        title: "Acceuil",
        icon: AppstoreOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "components-general-icon",
        path: `${APP_PREFIX_PATH}/users/askquestion`,
        title: "Poser un probleme",
        icon: QuestionCircleOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "components-general-typography",
        path: `${APP_PREFIX_PATH}/users/patrimoine`,
        title: "Patrimoine",
        icon: QrcodeOutlined,
        breadcrumb: true,
        submenu: [],
      },
    ],
  },
];

const componentsNavAdmin = [
  {
    key: "components-general",
    title: ".",
    permission: "admin@gmail.com",
    breadcrumb: true,
    submenu: [
      {
        key: "components-general-button",
        path: `${APP_PREFIX_PATH}/users/dashboards`,
        title: "Acceuil",
        icon: AiFillAppstore,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "components-general-icon",
        path: `${APP_PREFIX_PATH}/admin/request`,
        title: "Requetes",
        icon: HiColorSwatch,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "structures",
        path: `${APP_PREFIX_PATH}/admin/structure`,
        title: "Structures",
        icon: HiOfficeBuilding,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "Fonctions",
        path: `${APP_PREFIX_PATH}/admin/fonction`,
        title: "Fonctions",
        icon: HiBriefcase,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "categorie",
        path: `${APP_PREFIX_PATH}/admin/categorie`,
        title: "Catégorie de matériel",
        icon: HiTable,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "materiel",
        path: `${APP_PREFIX_PATH}/admin/materiel`,
        title: "Matériel",
        icon: HiSupport,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "pieces",
        path: `${APP_PREFIX_PATH}/admin/pieces`,
        title: "Pièces",
        icon: HiPuzzle,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "user",
        path: `${APP_PREFIX_PATH}/admin/utilisateur`,
        title: "Utilisateur",
        icon: BiSolidUserPlus,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "probleme",
        path: `${APP_PREFIX_PATH}/users/patrimoine`,
        title: "Poser un problème",
        icon: AiFillQuestionCircle,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "Fournisseurs",
        path: `${APP_PREFIX_PATH}/admin/fournisseur`,
        title: "Fournisseurs",
        icon: FaUsers,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "Reporting",
        path: `${APP_PREFIX_PATH}/admin/reporting`,
        title: "Reporting",
        icon: AiFillPieChart,
        breadcrumb: true,
        submenu: [],
      },
    ],
  },
];

const docsNavTree = [
  {
    key: "docs",
    path: `${APP_PREFIX_PATH}/docs`,
    title: "sidenav.docs",
    icon: BookOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "docs-documentation",
        path: `${APP_PREFIX_PATH}/docs/documentation`,
        title: "sidenav.docs.documentation",
        icon: FileUnknownOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "docs-changelog",
        path: `${APP_PREFIX_PATH}/docs/documentation/changelog`,
        title: "sidenav.docs.changelog",
        icon: ProfileOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [
  // ...dashBoardNavTree,
  //...appsNavTree,
  ...componentsNavTree,
  ...componentsNavAdmin,
  // ...extraNavTree,
  // ...docsNavTree
];

export default navigationConfig;

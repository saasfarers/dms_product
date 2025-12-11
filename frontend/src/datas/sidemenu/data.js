import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AssistantIcon from '@mui/icons-material/Assistant';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import GroupIcon from '@mui/icons-material/Group';
import FrontHandIcon from '@mui/icons-material/FrontHand';
import SchoolIcon from '@mui/icons-material/School';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import BusinessIcon from '@mui/icons-material/Business';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import BookIcon from '@mui/icons-material/Book';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import SyncIcon from '@mui/icons-material/Sync';

export const sidemenuData = {
    /* ------------------------------------------------------
        MOSQUE SECTION
    -------------------------------------------------------- */
    mosque: {
        en: {
            headerSection: {
                title: "Mosque Hub",
                subtitle: "Islamic Management System",
                icon: "🕌"
            },
            menuSection: {
                menus: [
                    { label: "Main Dashboard", icon: DashboardIcon, path: "/maindashboard" },
                    { label: "Platform Management", icon: ManageAccountsIcon, path: "/mainplatformmanagement" },
                    { label: "Main Settings", icon: SettingsIcon, path: "/mainsetting" },
                    { label: "Dashboard", icon: DashboardIcon, path: "/dashboard" },
                    { label: "Events", icon: EmojiEventsIcon, path: "/events" },
                    { label: "Donations", icon: VolunteerActivismIcon, path: "/donations" },
                    { label: "Financial Management", icon: LocalAtmIcon, path: "/financialmanagement" },
                    { label: "Procurement", icon: ProductionQuantityLimitsIcon, path: "/procurement" },
                    { label: "Family Assistance", icon: GroupIcon, path: "/familyassistance" },
                    { label: "Volunteers", icon: FrontHandIcon, path: "/volunteers" },
                    { label: "Education", icon: SchoolIcon, path: "/education" },
                    { label: "Facilities", icon: WebAssetIcon, path: "/facilities" },
                    { label: "Hajj Management", icon: BusinessIcon, path: "/platformmanagement" },
                    { label: "Staff Management", icon: EngineeringIcon, path: "/staffmanagement" },
                    { label: "Analytics", icon: AnalyticsIcon, path: "/analytics" },
                    { label: "AI Assistant", icon: AssistantIcon, path: "/aiassistant" },
                    { label: "Settings", icon: SettingsIcon, path: "/settings" },
                    { label: "Sermons", icon: CoPresentIcon, path: "/sermons" },
                    { label: "Book Facilities", icon: BookIcon, path: "/bookfacilities" },
                    { label: "Find Place", icon: AddLocationIcon, path: "/findplace" },
                    { label: "My Progress", icon: SyncIcon, path: "/myprogress" },
                ]
            },
            languageSection: {
                title: "Select Language",
                languages: [
                    { code: "en", label: "English" },
                    { code: "ta", label: "Tamil" },
                    { code: "ar", label: "Arabic" }
                ]
            },
            exitSection: {
                exitbtn: "Exit",
                icon: ExitToAppIcon
            }
        },

        ta: {
            headerSection: {
                title: "மசூதி மையம்",
                subtitle: "இஸ்லாமிய மேலாண்மை அமைப்பு",
                icon: "🕌"
            },
            menuSection: {
                menus: [
                    { label: "முதன்மை டாஷ்போர்டு", icon: DashboardIcon, path: "/maindashboard" },
                    { label: "பிளாட்ஃபோம் மேலாண்மை", icon: ManageAccountsIcon, path: "/mainplatformmanagement" },
                    { label: "முதன்மை அமைப்புகள்", icon: SettingsIcon, path: "/mainsetting" },
                    { label: "டாஷ்போர்டு", icon: DashboardIcon, path: "/dashboard" },
                    { label: "நிகழ்வுகள்", icon: EmojiEventsIcon, path: "/events" },
                    { label: "நன்கொடைகள்", icon: VolunteerActivismIcon, path: "/donations" },
                    { label: "நிதி மேலாண்மை", icon: LocalAtmIcon, path: "/financialmanagement" },
                    { label: "வாங்குதல்", icon: ProductionQuantityLimitsIcon, path: "/procurement" },
                    { label: "குடும்ப உதவி", icon: GroupIcon, path: "/familyassistance" },
                    { label: "தன்னார்வலர்கள்", icon: FrontHandIcon, path: "/volunteers" },
                    { label: "கல்வி", icon: SchoolIcon, path: "/education" },
                    { label: "வசதிகள்", icon: WebAssetIcon, path: "/facilities" },
                    { label: "ஹஜ் மேலாண்மை", icon: BusinessIcon, path: "/platformmanagement" },
                    { label: "பணியாளர் மேலாண்மை", icon: EngineeringIcon, path: "/staffmanagement" },
                    { label: "பகுப்பாய்வு", icon: AnalyticsIcon, path: "/analytics" },
                    { label: "கிர Artificial உதவியாளர்", icon: AssistantIcon, path: "/aiassistant" },
                    { label: "அமைப்புகள்", icon: SettingsIcon, path: "/settings" },
                    { label: "பிரச்சனைகள்", icon: CoPresentIcon, path: "/sermons" },
                    { label: "வசதிகள் முன்பதிவு", icon: BookIcon, path: "/bookfacilities" },
                    { label: "இடம் கண்டறிதல்", icon: AddLocationIcon, path: "/findplace" },
                    { label: "என் முன்னேற்றம்", icon: SyncIcon, path: "/myprogress" }
                ]
            },
            languageSection: {
                title: "Select Language",
                languages: [
                    { code: "en", label: "English" },
                    { code: "ta", label: "Tamil" },
                    { code: "ar", label: "Arabic" }
                ]
            },
            exitSection: {
                exitbtn: "வெளியேறு",
                icon: ExitToAppIcon
            }
        },

        ar: {
            headerSection: {
                title: "مركز المسجد",
                subtitle: "نظام إدارة إسلامي",
                icon: "🕌"
            },
            menuSection: {
                menus: [
                    { label: "لوحة القيادة الرئيسية", icon: DashboardIcon, path: "/maindashboard" },
                    { label: "إدارة المنصة", icon: ManageAccountsIcon, path: "/mainplatformmanagement" },
                    { label: "الإعدادات الرئيسية", icon: SettingsIcon, path: "/mainsetting" },
                    { label: "لوحة القيادة", icon: DashboardIcon, path: "/dashboard" },
                    { label: "الأحداث", icon: EmojiEventsIcon, path: "/events" },
                    { label: "التبرعات", icon: VolunteerActivismIcon, path: "/donations" },
                    { label: "الإدارة المالية", icon: LocalAtmIcon, path: "/financialmanagement" },
                    { label: "المشتريات", icon: ProductionQuantityLimitsIcon, path: "/procurement" },
                    { label: "مساعدة الأسرة", icon: GroupIcon, path: "/familyassistance" },
                    { label: "المتطوعون", icon: FrontHandIcon, path: "/volunteers" },
                    { label: "التعليم", icon: SchoolIcon, path: "/education" },
                    { label: "المرافق", icon: WebAssetIcon, path: "/facilities" },
                    { label: "إدارة الحج", icon: BusinessIcon, path: "/platformmanagement" },
                    { label: "إدارة الموظفين", icon: EngineeringIcon, path: "/staffmanagement" },
                    { label: "التحليلات", icon: AnalyticsIcon, path: "/analytics" },
                    { label: "المساعد الذكي", icon: AssistantIcon, path: "/aiassistant" },
                    { label: "الإعدادات", icon: SettingsIcon, path: "/settings" },
                    { label: "الخطب", icon: CoPresentIcon, path: "/sermons" },
                    { label: "حجز المرافق", icon: BookIcon, path: "/bookfacilities" },
                    { label: "البحث عن مكان", icon: AddLocationIcon, path: "/findplace" },
                    { label: "تقدمي", icon: SyncIcon, path: "/myprogress" }
                ]
            },
            languageSection: {
                title: "Select Language",
                languages: [
                    { code: "en", label: "English" },
                    { code: "ta", label: "Tamil" },
                    { code: "ar", label: "Arabic" }
                ]
            },
            exitSection: {
                exitbtn: "خروج",
                icon: ExitToAppIcon
            }
        }
    },

    /* ------------------------------------------------------
        TEMPLE SECTION
    -------------------------------------------------------- */

    temple: {
        en: {
            headerSection: {
                title: "Temple Hub",
                subtitle: "Hindu Temple Management System",
                icon: "🏯"
            },
            menuSection: {
                menus: [
                    { label: "Main Hall", icon: DashboardIcon, path: "/maindashboard" },
                    { label: "Pooja Schedule", icon: ManageAccountsIcon, path: "/mainplatformmanagement" },
                    { label: "Temple Settings", icon: SettingsIcon, path: "/mainsetting" },
                    { label: "Dashboard", icon: DashboardIcon, path: "/dashboard" },
                    { label: "Events", icon: EmojiEventsIcon, path: "/events" },
                    { label: "Donations", icon: VolunteerActivismIcon, path: "/donations" },
                    { label: "Financial Management", icon: LocalAtmIcon, path: "/financialmanagement" },
                    { label: "Procurement", icon: ProductionQuantityLimitsIcon, path: "/procurement" },
                    { label: "Family Assistance", icon: GroupIcon, path: "/familyassistance" },
                    { label: "Volunteers", icon: FrontHandIcon, path: "/volunteers" },
                    { label: "Education", icon: SchoolIcon, path: "/education" },
                    { label: "Facilities", icon: WebAssetIcon, path: "/facilities" },
                    { label: "Temple Management", icon: BusinessIcon, path: "/platformmanagement" },
                    { label: "Staff Management", icon: EngineeringIcon, path: "/staffmanagement" },
                    { label: "Analytics", icon: AnalyticsIcon, path: "/analytics" },
                    { label: "AI Assistant", icon: AssistantIcon, path: "/aiassistant" },
                    { label: "Settings", icon: SettingsIcon, path: "/settings" },
                    { label: "Pooja Sermons", icon: CoPresentIcon, path: "/sermons" },
                    { label: "Book Pooja Slots", icon: BookIcon, path: "/bookfacilities" },
                    { label: "Find Place", icon: AddLocationIcon, path: "/findplace" },
                    { label: "My Progress", icon: SyncIcon, path: "/myprogress" },
                ]
            },
            languageSection: {
                title: "Select Language",
                languages: [
                    { code: "en", label: "English" },
                    { code: "ta", label: "Tamil" },
                    { code: "ar", label: "Arabic" }
                ]
            },
            exitSection: {
                exitbtn: "Exit",
                icon: ExitToAppIcon
            }
        },

        ta: {
            headerSection: {
                title: "கோவில் மையம்",
                subtitle: "இந்துக் கோவில் மேலாண்மை அமைப்பு",
                icon: "🏯"
            },
            menuSection: {
                menus: [
                    { label: "முக்கிய மண்டபம்", icon: DashboardIcon, path: "/maindashboard" },
                    { label: "பூஜை அட்டவணை", icon: ManageAccountsIcon, path: "/mainplatformmanagement" },
                    { label: "கோயில் அமைப்புகள்", icon: SettingsIcon, path: "/mainsetting" },
                    { label: "டாஷ்போர்டு", icon: DashboardIcon, path: "/dashboard" },
                    { label: "நிகழ்வுகள்", icon: EmojiEventsIcon, path: "/events" },
                    { label: "நன்கொடைகள்", icon: VolunteerActivismIcon, path: "/donations" },
                    { label: "நிதி மேலாண்மை", icon: LocalAtmIcon, path: "/financialmanagement" },
                    { label: "வாங்குதல்", icon: ProductionQuantityLimitsIcon, path: "/procurement" },
                    { label: "குடும்ப உதவி", icon: GroupIcon, path: "/familyassistance" },
                    { label: "தன்னார்வலர்கள்", icon: FrontHandIcon, path: "/volunteers" },
                    { label: "கல்வி", icon: SchoolIcon, path: "/education" },
                    { label: "வசதிகள்", icon: WebAssetIcon, path: "/facilities" },
                    { label: "கோயில் மேலாண்மை", icon: BusinessIcon, path: "/platformmanagement" },
                    { label: "பணியாளர் மேலாண்மை", icon: EngineeringIcon, path: "/staffmanagement" },
                    { label: "பகுப்பாய்வு", icon: AnalyticsIcon, path: "/analytics" },
                    { label: "AI உதவியாளர்", icon: AssistantIcon, path: "/aiassistant" },
                    { label: "அமைப்புகள்", icon: SettingsIcon, path: "/settings" },
                    { label: "பூஜை பிரச்சனைகள்", icon: CoPresentIcon, path: "/sermons" },
                    { label: "பூஜை முன்பதிவு", icon: BookIcon, path: "/bookfacilities" },
                    { label: "இடம் கண்டறிதல்", icon: AddLocationIcon, path: "/findplace" },
                    { label: "என் முன்னேற்றம்", icon: SyncIcon, path: "/myprogress" },
                ]
            },
            languageSection: {
                title: "Select Language",
                languages: [
                    { code: "en", label: "English" },
                    { code: "ta", label: "Tamil" },
                    { code: "ar", label: "Arabic" }
                ]
            },
            exitSection: {
                exitbtn: "வெளியேறு",
                icon: ExitToAppIcon
            }
        },

        ar: {
            headerSection: {
                title: "مركز المعبد",
                subtitle: "نظام إدارة المعبد الهندوسي",
                icon: "🏯"
            },
            menuSection: {
                menus: [
                    { label: "القاعة الرئيسية", icon: DashboardIcon, path: "/maindashboard" },
                    { label: "جدول البوجا", icon: ManageAccountsIcon, path: "/mainplatformmanagement" },
                    { label: "إعدادات المعبد", icon: SettingsIcon, path: "/mainsetting" },
                    { label: "لوحة القيادة", icon: DashboardIcon, path: "/dashboard" },
                    { label: "الأحداث", icon: EmojiEventsIcon, path: "/events" },
                    { label: "التبرعات", icon: VolunteerActivismIcon, path: "/donations" },
                    { label: "الإدارة المالية", icon: LocalAtmIcon, path: "/financialmanagement" },
                    { label: "المشتريات", icon: ProductionQuantityLimitsIcon, path: "/procurement" },
                    { label: "مساعدة الأسرة", icon: GroupIcon, path: "/familyassistance" },
                    { label: "المتطوعون", icon: FrontHandIcon, path: "/volunteers" },
                    { label: "التعليم", icon: SchoolIcon, path: "/education" },
                    { label: "المرافق", icon: WebAssetIcon, path: "/facilities" },
                    { label: "إدارة المعبد", icon: BusinessIcon, path: "/platformmanagement" },
                    { label: "إدارة الموظفين", icon: EngineeringIcon, path: "/staffmanagement" },
                    { label: "التحليلات", icon: AnalyticsIcon, path: "/analytics" },
                    { label: "المساعد الذكي", icon: AssistantIcon, path: "/aiassistant" },
                    { label: "الإعدادات", icon: SettingsIcon, path: "/settings" },
                    { label: "خطب البوجا", icon: CoPresentIcon, path: "/sermons" },
                    { label: "حجز البوجا", icon: BookIcon, path: "/bookfacilities" },
                    { label: "البحث عن مكان", icon: AddLocationIcon, path: "/findplace" },
                    { label: "تقدمي", icon: SyncIcon, path: "/myprogress" },
                ]
            },
            languageSection: {
                title: "Select Language",
                languages: [
                    { code: "en", label: "English" },
                    { code: "ta", label: "Tamil" },
                    { code: "ar", label: "Arabic" }
                ]
            },
            exitSection: {
                exitbtn: "خروج",
                icon: ExitToAppIcon
            }
        }
    },

    /* ------------------------------------------------------
        CHURCH SECTION
    -------------------------------------------------------- */
    church: {
        en: {
            headerSection: {
                title: "Church Hub",
                subtitle: "Christian Church Management System",
                icon: "⛪"
            },
            menuSection: {
                menus: [
                    { label: "Main Hall", icon: DashboardIcon, path: "/maindashboard" },
                    { label: "Service Schedule", icon: ManageAccountsIcon, path: "/mainplatformmanagement" },
                    { label: "Church Settings", icon: SettingsIcon, path: "/mainsetting" },
                    { label: "Dashboard", icon: DashboardIcon, path: "/dashboard" },
                    { label: "Events", icon: EmojiEventsIcon, path: "/events" },
                    { label: "Donations", icon: VolunteerActivismIcon, path: "/donations" },
                    { label: "Financial Management", icon: LocalAtmIcon, path: "/financialmanagement" },
                    { label: "Procurement", icon: ProductionQuantityLimitsIcon, path: "/procurement" },
                    { label: "Family Assistance", icon: GroupIcon, path: "/familyassistance" },
                    { label: "Volunteers", icon: FrontHandIcon, path: "/volunteers" },
                    { label: "Education", icon: SchoolIcon, path: "/education" },
                    { label: "Facilities", icon: WebAssetIcon, path: "/facilities" },
                    { label: "Church Management", icon: BusinessIcon, path: "/platformmanagement" },
                    { label: "Staff Management", icon: EngineeringIcon, path: "/staffmanagement" },
                    { label: "Analytics", icon: AnalyticsIcon, path: "/analytics" },
                    { label: "AI Assistant", icon: AssistantIcon, path: "/aiassistant" },
                    { label: "Settings", icon: SettingsIcon, path: "/settings" },
                    { label: "Sermons", icon: CoPresentIcon, path: "/sermons" },
                    { label: "Book Services", icon: BookIcon, path: "/bookfacilities" },
                    { label: "Find Place", icon: AddLocationIcon, path: "/findplace" },
                    { label: "My Progress", icon: SyncIcon, path: "/myprogress" },
                ]
            },
            languageSection: {
                title: "Select Language",
                languages: [
                    { code: "en", label: "English" },
                    { code: "ta", label: "Tamil" },
                    { code: "ar", label: "Arabic" }
                ]
            },
            exitSection: {
                exitbtn: "Exit",
                icon: ExitToAppIcon
            }
        },

        ta: {
            headerSection: {
                title: "சர்ச் மையம்",
                subtitle: "கிறிஸ்தவ தேவாலய மேலாண்மை அமைப்பு",
                icon: "⛪"
            },
            menuSection: {
                menus: [
                    { label: "முக்கிய மண்டபம்", icon: DashboardIcon, path: "/maindashboard" },
                    { label: "சேவை அட்டவணை", icon: ManageAccountsIcon, path: "/mainplatformmanagement" },
                    { label: "சேர்ச்சி அமைப்புகள்", icon: SettingsIcon, path: "/mainsetting" },
                    { label: "டாஷ்போர்டு", icon: DashboardIcon, path: "/dashboard" },
                    { label: "நிகழ்வுகள்", icon: EmojiEventsIcon, path: "/events" },
                    { label: "நன்கொடைகள்", icon: VolunteerActivismIcon, path: "/donations" },
                    { label: "நிதி மேலாண்மை", icon: LocalAtmIcon, path: "/financialmanagement" },
                    { label: "வாங்குதல்", icon: ProductionQuantityLimitsIcon, path: "/procurement" },
                    { label: "குடும்ப உதவி", icon: GroupIcon, path: "/familyassistance" },
                    { label: "தன்னார்வலர்கள்", icon: FrontHandIcon, path: "/volunteers" },
                    { label: "கல்வி", icon: SchoolIcon, path: "/education" },
                    { label: "வசதிகள்", icon: WebAssetIcon, path: "/facilities" },
                    { label: "சேர்ச்சி மேலாண்மை", icon: BusinessIcon, path: "/platformmanagement" },
                    { label: "பணியாளர் மேலாண்மை", icon: EngineeringIcon, path: "/staffmanagement" },
                    { label: "பகுப்பாய்வு", icon: AnalyticsIcon, path: "/analytics" },
                    { label: "AI உதவியாளர்", icon: AssistantIcon, path: "/aiassistant" },
                    { label: "அமைப்புகள்", icon: SettingsIcon, path: "/settings" },
                    { label: "பிரச்சனைகள்", icon: CoPresentIcon, path: "/sermons" },
                    { label: "சேவை முன்பதிவு", icon: BookIcon, path: "/bookfacilities" },
                    { label: "இடம் கண்டறிதல்", icon: AddLocationIcon, path: "/findplace" },
                    { label: "என் முன்னேற்றம்", icon: SyncIcon, path: "/myprogress" },
                ]
            },
            languageSection: {
                title: "Select Language",
                languages: [
                    { code: "en", label: "English" },
                    { code: "ta", label: "Tamil" },
                    { code: "ar", label: "Arabic" }
                ]
            },
            exitSection: {
                exitbtn: "வெளியேறு",
                icon: ExitToAppIcon
            }
        },

        ar: {
            headerSection: {
                title: "مركز الكنيسة",
                subtitle: "نظام إدارة الكنيسة المسيحية",
                icon: "⛪"
            },
            menuSection: {
                menus: [
                    { label: "القاعة الرئيسية", icon: DashboardIcon, path: "/maindashboard" },
                    { label: "جدول الخدمة", icon: ManageAccountsIcon, path: "/mainplatformmanagement" },
                    { label: "إعدادات الكنيسة", icon: SettingsIcon, path: "/mainsetting" },
                    { label: "لوحة القيادة", icon: DashboardIcon, path: "/dashboard" },
                    { label: "الأحداث", icon: EmojiEventsIcon, path: "/events" },
                    { label: "التبرعات", icon: VolunteerActivismIcon, path: "/donations" },
                    { label: "الإدارة المالية", icon: LocalAtmIcon, path: "/financialmanagement" },
                    { label: "المشتريات", icon: ProductionQuantityLimitsIcon, path: "/procurement" },
                    { label: "مساعدة الأسرة", icon: GroupIcon, path: "/familyassistance" },
                    { label: "المتطوعون", icon: FrontHandIcon, path: "/volunteers" },
                    { label: "التعليم", icon: SchoolIcon, path: "/education" },
                    { label: "المرافق", icon: WebAssetIcon, path: "/facilities" },
                    { label: "إدارة الكنيسة", icon: BusinessIcon, path: "/platformmanagement" },
                    { label: "إدارة الموظفين", icon: EngineeringIcon, path: "/staffmanagement" },
                    { label: "التحليلات", icon: AnalyticsIcon, path: "/analytics" },
                    { label: "المساعد الذكي", icon: AssistantIcon, path: "/aiassistant" },
                    { label: "الإعدادات", icon: SettingsIcon, path: "/settings" },
                    { label: "الخطب", icon: CoPresentIcon, path: "/sermons" },
                    { label: "حجز الخدمات", icon: BookIcon, path: "/bookfacilities" },
                    { label: "البحث عن مكان", icon: AddLocationIcon, path: "/findplace" },
                    { label: "تقدمي", icon: SyncIcon, path: "/myprogress" },
                ]
            },
            languageSection: {
                title: "Select Language",
                languages: [
                    { code: "en", label: "English" },
                    { code: "ta", label: "Tamil" },
                    { code: "ar", label: "Arabic" }
                ]
            },
            exitSection: {
                exitbtn: "خروج",
                icon: ExitToAppIcon
            }
        }
    }
};

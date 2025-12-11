import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupIcon from "@mui/icons-material/Group";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

export const mainpageData = {
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
      languageSection: {
        title: "Select Language",
        languages: [
          { code: "en", label: "English" },
          { code: "ta", label: "Tamil" },
          { code: "ar", label: "Arabic" }
        ]
      },
      roleSection: {
        title: "Select Your Role",
        roles: [
          { id: "SuperAdmin", label: "Platform Super Admin", icon: WorkspacePremiumIcon },
          { id: "Admin", label: "Mosque Admin", icon: AdminPanelSettingsIcon },
          { id: "Head", label: "Imam / Sheikh", icon: MenuBookIcon },
          { id: "Staff", label: "Mosque Staff", icon: GroupIcon },
          { id: "Member", label: "Community Member", icon: VolunteerActivismIcon }
        ]
      },
      loginPopupSection: {
        email: "Email",
        password: "Password",
        loginBtn: "Login",
        cancelBtn: "Cancel"
      }
    },

    ta: {
      headerSection: {
        title: "மசூதி மையம்",
        subtitle: "இஸ்லாமிய மேலாண்மை அமைப்பு",
        icon: "🕌"
      },
      languageSection: {
        title: "மொழியை தேர்ந்தெடுக்கவும்",
        languages: [
          { code: "en", label: "ஆங்கிலம்" },
          { code: "ta", label: "தமிழ்" },
          { code: "ar", label: "அரபிக்" }
        ]
      },
      roleSection: {
        title: "உங்கள் பங்கைத் தேர்ந்தெடுக்கவும்",
        roles: [
          { id: "platform_super_admin", label: "பிளாட்பார்ம் சூப்பர் நிர்வாகி", icon: WorkspacePremiumIcon },
          { id: "mosque_admin", label: "மசூதி நிர்வாகி", icon: AdminPanelSettingsIcon },
          { id: "imam_sheikh", label: "இமாம் / ஷெய்க்", icon: MenuBookIcon },
          { id: "mosque_staff", label: "மசூதி பணியாளர்", icon: GroupIcon },
          { id: "community_member", label: "சமூக உறுப்பினர்", icon: VolunteerActivismIcon }
        ]
      },
      loginPopupSection: {
        email: "மின்னஞ்சல்",
        password: "கடவுச்சொல்",
        loginBtn: "உள்நுழை",
        cancelBtn: "ரத்துசெய்"
      }
    },

    ar: {
      headerSection: {
        title: "مركز المسجد",
        subtitle: "نظام إدارة إسلامي",
        icon: "🕌"
      },
      languageSection: {
        title: "اختر اللغة",
        languages: [
          { code: "en", label: "الإنجليزية" },
          { code: "ta", label: "التاميلية" },
          { code: "ar", label: "العربية" }
        ]
      },
      roleSection: {
        title: "اختر دورك",
        roles: [
          { id: "platform_super_admin", label: "المشرف العام", icon: WorkspacePremiumIcon },
          { id: "mosque_admin", label: "مشرف المسجد", icon: AdminPanelSettingsIcon },
          { id: "imam_sheikh", label: "إمام / شيخ", icon: MenuBookIcon },
          { id: "mosque_staff", label: "موظفو المسجد", icon: GroupIcon },
          { id: "community_member", label: "عضو المجتمع", icon: VolunteerActivismIcon }
        ]
      },
      loginPopupSection: {
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        loginBtn: "تسجيل الدخول",
        cancelBtn: "إلغاء"
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
      languageSection: {
        title: "Select Language",
        languages: [
          { code: "en", label: "English" },
          { code: "ta", label: "Tamil" },
          { code: "ar", label: "Arabic" }
        ]
      },
      roleSection: {
        title: "Select Your Role",
        roles: [
          { id: "platform_super_admin", label: "Platform Super Admin", icon: WorkspacePremiumIcon },
          { id: "temple_admin", label: "Temple Admin", icon: AdminPanelSettingsIcon },
          { id: "priest", label: "Priest", icon: MenuBookIcon },
          { id: "temple_staff", label: "Temple Staff", icon: GroupIcon },
          { id: "devotee", label: "Devotee", icon: VolunteerActivismIcon }
        ]
      },
      loginPopupSection: {
        email: "Email",
        password: "Password",
        loginBtn: "Login",
        cancelBtn: "Cancel"
      }
    },

    ta: {
      headerSection: {
        title: "கோவில் மையம்",
        subtitle: "இந்துக் கோவில் மேலாண்மை அமைப்பு",
        icon: "🏯"
      },
      languageSection: {
        title: "மொழியை தேர்ந்தெடுக்கவும்",
        languages: [
          { code: "en", label: "ஆங்கிலம்" },
          { code: "ta", label: "தமிழ்" },
          { code: "ar", label: "அரபிக்" }
        ]
      },
      roleSection: {
        title: "உங்கள் பங்கைத் தேர்ந்தெடுக்கவும்",
        roles: [
          { id: "platform_super_admin", label: "பிளாட்பார்ம் சூப்பர் நிர்வாகி", icon: WorkspacePremiumIcon },
          { id: "temple_admin", label: "கோவில் நிர்வாகி", icon: AdminPanelSettingsIcon },
          { id: "priest", label: "பூசாரி", icon: MenuBookIcon },
          { id: "temple_staff", label: "கோவில் பணியாளர்", icon: GroupIcon },
          { id: "devotee", label: "பக்தர்", icon: VolunteerActivismIcon }
        ]
      },
      loginPopupSection: {
        email: "மின்னஞ்சல்",
        password: "கடவுச்சொல்",
        loginBtn: "உள்நுழை",
        cancelBtn: "ரத்துசெய்"
      }
    },

    ar: {
      headerSection: {
        title: "مركز المعبد",
        subtitle: "نظام إدارة المعبد الهندوسي",
        icon: "🏯"
      },
      languageSection: {
        title: "اختر اللغة",
        languages: [
          { code: "en", label: "الإنجليزية" },
          { code: "ta", label: "التاميلية" },
          { code: "ar", label: "العربية" }
        ]
      },
      roleSection: {
        title: "اختر دورك",
        roles: [
          { id: "platform_super_admin", label: "المشرف العام", icon: WorkspacePremiumIcon },
          { id: "temple_admin", label: "مشرف المعبد", icon: AdminPanelSettingsIcon },
          { id: "priest", label: "كاهن", icon: MenuBookIcon },
          { id: "temple_staff", label: "موظفو المعبد", icon: GroupIcon },
          { id: "devotee", label: "مؤمن", icon: VolunteerActivismIcon }
        ]
      },
      loginPopupSection: {
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        loginBtn: "تسجيل الدخول",
        cancelBtn: "إلغاء"
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
      languageSection: {
        title: "Select Language",
        languages: [
          { code: "en", label: "English" },
          { code: "ta", label: "Tamil" },
          { code: "ar", label: "Arabic" }
        ]
      },
      roleSection: {
        title: "Select Your Role",
        roles: [
          { id: "platform_super_admin", label: "Platform Super Admin", icon: WorkspacePremiumIcon },
          { id: "church_admin", label: "Church Admin", icon: AdminPanelSettingsIcon },
          { id: "pastor", label: "Pastor", icon: MenuBookIcon },
          { id: "church_staff", label: "Church Staff", icon: GroupIcon },
          { id: "believer", label: "Believer", icon: VolunteerActivismIcon }
        ]
      },
      loginPopupSection: {
        email: "Email",
        password: "Password",
        loginBtn: "Login",
        cancelBtn: "Cancel"
      }
    },

    ta: {
      headerSection: {
        title: "சர்ச் மையம்",
        subtitle: "கிறிஸ்தவ தேவாலய மேலாண்மை அமைப்பு",
        icon: "⛪"
      },
      languageSection: {
        title: "மொழியை தேர்ந்தெடுக்கவும்",
        languages: [
          { code: "en", label: "ஆங்கிலம்" },
          { code: "ta", label: "தமிழ்" },
          { code: "ar", label: "அரபிக்" }
        ]
      },
      roleSection: {
        title: "உங்கள் பங்கு",
        roles: [
          { id: "platform_super_admin", label: "பிளாட்பார்ம் சூப்பர் நிர்வாகி", icon: WorkspacePremiumIcon },
          { id: "church_admin", label: "சர்ச் நிர்வாகி", icon: AdminPanelSettingsIcon },
          { id: "pastor", label: "பாஸ்டர்", icon: MenuBookIcon },
          { id: "church_staff", label: "சர்ச் பணியாளர்", icon: GroupIcon },
          { id: "believer", label: "நம்பிக்கைுள்ளவர்", icon: VolunteerActivismIcon }
        ]
      },
      loginPopupSection: {
        email: "மின்னஞ்சல்",
        password: "கடவுச்சொல்",
        loginBtn: "உள்நுழை",
        cancelBtn: "ரத்துசெய்"
      }
    },

    ar: {
      headerSection: {
        title: "مركز الكنيسة",
        subtitle: "نظام إدارة الكنيسة المسيحية",
        icon: "⛪"
      },
      languageSection: {
        title: "اختر اللغة",
        languages: [
          { code: "en", label: "الإنجليزية" },
          { code: "ta", label: "التاميلية" },
          { code: "ar", label: "العربية" }
        ]
      },
      roleSection: {
        title: "اختر دورك",
        roles: [
          { id: "platform_super_admin", label: "المشرف العام", icon: WorkspacePremiumIcon },
          { id: "church_admin", label: "مشرف الكنيسة", icon: AdminPanelSettingsIcon },
          { id: "pastor", label: "قس", icon: MenuBookIcon },
          { id: "church_staff", label: "موظفو الكنيسة", icon: GroupIcon },
          { id: "believer", label: "مؤمن", icon: VolunteerActivismIcon }
        ]
      },
      loginPopupSection: {
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        loginBtn: "تسجيل الدخول",
        cancelBtn: "إلغاء"
      }
    }
  }
};

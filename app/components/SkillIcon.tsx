type SkillIconProps = { name: string };

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true as const,
};

export function SkillIcon({ name }: SkillIconProps) {
  switch (name) {
    case "Jira":
      return (
        <svg {...iconProps}>
          <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.004-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.057a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.218 5.218 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0z" />
        </svg>
      );
    case "Azure DevOps":
      return (
        <svg {...iconProps}>
          <path d="M0 8.899l2.247 2.966 8.775-6.322 8.775 6.322L22.044 8.9l-8.775-6.322L0 8.899zm0 6.202l2.247 2.965 8.775-6.321 8.775 6.321-2.247 2.966-6.528-4.655-6.528 4.655L0 15.1z" />
        </svg>
      );
    case "TestRail":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M9 15l2 2 4-4" />
        </svg>
      );
    case "Postman":
      return (
        <svg {...iconProps}>
          <path d="M13.527.099A6.076 6.076 0 0 0 12.608 0C6.507 0 .978 5.339.978 11.944c0 6.606 5.529 11.945 12.63 11.945 1.381 0 2.712-.211 3.957-.602a.809.809 0 0 0 .553-.764.794.794 0 0 0-.17-.49l-1.031-1.2a.806.806 0 0 0-1.157-.072 7.33 7.33 0 0 1-4.152 1.287c-3.794 0-6.877-2.898-6.877-6.477 0-3.58 3.083-6.478 6.877-6.478 1.766 0 3.374.652 4.592 1.723l-1.958 2.282H8.957v3.029h8.551V4.533l-2.05 2.388a8.575 8.575 0 0 0 3.069-1.822.806.806 0 0 0 .0-1.0z" />
        </svg>
      );
    case "Swagger":
      return (
        <svg {...iconProps}>
          <path d="M12.034 0C5.408-.002.002 5.404 0 12.03c0 6.627 5.406 12.033 12.032 12.033 6.628 0 12.034-5.406 12.034-12.033C24.066 5.404 18.66.002 12.034 0zm-.211 4.912c1.591 0 2.876 1.285 2.876 2.876s-1.285 2.876-2.876 2.876-2.876-1.285-2.876-2.876 1.285-2.876 2.876-2.876zm2.988 12.087c0 .658-.534 1.192-1.192 1.192H9.381c-.658 0-1.192-.534-1.192-1.192V9.381c0-.658.534-1.192 1.192-1.192h4.419c.658 0 1.192.534 1.192 1.192v7.618z" />
        </svg>
      );
    case "SQL":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case "MySQL":
      return (
        <svg {...iconProps}>
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5h-2v-4h2v4zm-1-5.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
          <path d="M7 9h2v7H7zm8 0h2v7h-2z" />
        </svg>
      );
    case "Selenium":
      return (
        <svg {...iconProps}>
          <path d="M22.052 8.441a1.002 1.002 0 0 0-.414-.627l-9.123-6.525a1.001 1.001 0 0 0-1.168 0L2.224 7.814a1.002 1.002 0 0 0-.414.627A.996.996 0 0 0 2 9.157v7.502c0 .285.122.557.336.748l9.123 7.876a.998.998 0 0 0 1.306 0l9.123-7.876a.998.998 0 0 0 .336-.748V9.157a.997.997 0 0 0-.172-.716zM12 3.195l7.558 5.407L12 14.009 4.442 8.602 12 3.195zm-8 6.945l7 5v7.652l-7-6.042V10.14zm16 6.61l-7 6.042v-7.652l7-5v6.61z" />
        </svg>
      );
    case "Cypress":
      return (
        <svg {...iconProps}>
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.64 16.5h-2.58l-1.92-3.84h-3.48v3.84H7.2V7.5h6.36c2.22 0 3.72 1.38 3.72 3.42 0 1.62-.96 2.76-2.28 3.18l2.64 4.4zm-4.32-6.54h-3.6v2.16h3.6c.96 0 1.56-.54 1.56-1.08 0-.6-.6-1.08-1.56-1.08z" />
        </svg>
      );
    case "Playwright":
      return (
        <svg {...iconProps}>
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
        </svg>
      );
    case "Appium":
      return (
        <svg {...iconProps}>
          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
        </svg>
      );
    case "TestNG":
      return (
        <svg {...iconProps}>
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.08 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.01l-7-3.5V8.82zm9 10.51v-7.01l7-3.5v7.01l-7 3.5z" />
        </svg>
      );
    case "JUnit":
      return (
        <svg {...iconProps}>
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.8 17.4h-2.4V6.6h2.4v10.8zm4.8 0h-2.4V6.6h2.4v10.8z" />
        </svg>
      );
    case "JavaScript":
      return (
        <svg {...iconProps}>
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.034-2.876-.769-.384-1.608-.704-1.858-1.374-.091-.384-.105-.595-.045-.888.15-.768 1.028-1.032 1.695-1.032.888 0 1.695.384 1.818 1.23.045.384.045.888.045 1.518h1.695c0-1.23-.15-2.175-.705-2.85-.705-.888-1.83-1.23-3.034-1.23-1.695 0-3.034.705-3.604 1.83-.45.768-.6 1.83-.45 2.85.15 1.23.705 2.175 1.83 2.85 1.23.888 2.85 1.23 3.604 1.83.705.6.888 1.23.888 2.175 0 1.23-.705 2.025-1.83 2.325-.705.15-1.695.15-2.55-.3-.888-.45-1.23-1.23-1.395-2.175h-1.83c.15 1.83.705 3.034 1.83 3.879 1.23.888 2.85 1.23 4.305 1.23 1.83 0 3.489-.45 4.455-1.23 1.23-.888 1.83-2.325 1.83-3.879-.045-1.23-.45-2.175-1.23-2.85zM8.276 5.943v8.759c0 .888.15 1.695.705 2.325.45.6 1.23.888 2.175.888.888 0 1.695-.3 2.175-.888.6-.705.888-1.695.888-2.85V5.943h-1.83v8.604c0 .705-.15 1.23-.45 1.53-.3.3-.705.45-1.23.45-.6 0-1.05-.15-1.35-.45-.3-.3-.45-.825-.45-1.53V5.943H8.276z" />
        </svg>
      );
    case "Python":
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M12.12 0C10.15.01 8.3.18 6.76.45 2.2 1.26 1.37 3.02 1.37 6.3v2.16h5.4v-.72c0-2.59 2.23-4.91 5.35-4.91h4.8c2.67 0 4.8 2.2 4.8 4.92v3.68c0 2.63-2.23 4.6-4.8 4.6h-4.8c-2.47 0-4.35 2.11-4.35 4.61v3.5c0 2.6 2.26 4.13 4.35 4.75 2.5.74 4.9.88 8.2.36 2.28-.36 4.35-1.4 4.35-4.75v-2.15h-5.35v.72c0 2.6-2.23 4.92-4.8 4.92H9.7c-2.67 0-4.8-2.2-4.8-4.92v-3.69c0-2.62 2.23-4.6 4.8-4.6h7.2c2.48 0 4.35-2.1 4.35-4.6V6.3c0-2.6-2.2-4.55-4.35-5.39C15.52.37 13.8-.01 12.12 0Zm-2.94 5.62a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Zm5.64 12.74a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
        </svg>
      );
    case "Git":
      return (
        <svg {...iconProps}>
          <path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039 1.837 1.837 0 0 1-2.6 0 1.846 1.846 0 0 1-.404-1.996L12.86 8.955v6.525a1.848 1.848 0 0 1 .501.431 1.845 1.845 0 0 1 0 2.608 1.845 1.845 0 0 1-2.608 0 1.845 1.845 0 0 1 0-2.608c.166-.166.32-.347.435-.543V8.33a1.847 1.847 0 0 1-.543-.435 1.845 1.845 0 0 1 0-2.608 1.845 1.845 0 0 1 2.608 0 1.848 1.848 0 0 1 .431 1.003l2.658-2.66a1.838 1.838 0 0 1 2.341-2.327l2.76-2.76-1.877-1.876a1.55 1.55 0 0 0-2.188 0L.454 10.93a1.55 1.55 0 0 0 0 2.188l10.48 10.477a1.55 1.55 0 0 0 2.186 0l10.426-10.425a1.55 1.55 0 0 0 0-2.19z" />
        </svg>
      );
    case "GitHub":
      return (
        <svg {...iconProps}>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      );
    case "Jenkins":
      return (
        <svg {...iconProps}>
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm-1.2 3.6v12h2.4V6H10.8zm4.8 3.6v8.4h2.4V9.6h-2.4zM5.4 12v6h2.4v-6H5.4z" />
        </svg>
      );
    case "GitHub Actions":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "REST Assured":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M6 12h4" />
          <path d="M14 12h4" />
        </svg>
      );
    case "JMeter":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10z" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
    case "Apache JMeter":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19V9m5 10V5m5 14v-7m5 7V3" />
          <path d="M2 19h20" />
        </svg>
      );
    case "k6":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 4v16M5 12l8-8M5 12l8 8M15 12h4" />
        </svg>
      );
    case "Locust":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4" />
          <path d="M8 12l-4 8m12-8 4 8M9 16h6" />
        </svg>
      );
    case "Gatling":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 18h16M6 18l3-8 3 4 3-8 3 6" />
        </svg>
      );
    case "Pytest":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="m4 12 5 5L20 6" />
          <path d="M4 4h16M4 20h16" />
        </svg>
      );
    case "Docker":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 13h16c1.3 0 2.4-.7 3-1.8-.6-.5-1.4-.8-2.2-.8-.2-1.5-1.4-2.6-2.9-2.6-.5 0-1 .1-1.4.4C15 6.3 13.8 5 12.2 5c-1.2 0-2.3.7-2.8 1.8-.4-.2-.9-.3-1.4-.3-1.5 0-2.7 1.1-2.9 2.6C4 9.2 3 10.4 3 12v1Z" />
          <path d="M5 16c2 2 5 3 8 3 3.5 0 6.3-1.4 8-4" />
        </svg>
      );
    case "AI Assisted Testing":
    case "Intelligent Test Data":
    case "Defect Prediction":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3h6l2 3 3 2v6l-3 2-2 3H9l-2-3-3-2V8l3-2 2-3Z" />
          <circle cx="9" cy="11" r="1" />
          <circle cx="15" cy="11" r="1" />
          <path d="M9 15c1.7 1.2 4.3 1.2 6 0" />
        </svg>
      );
    case "Manual Testing":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "Automation Testing":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );
    case "API Testing":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
        </svg>
      );
    case "Bug Tracking":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
      );
    case "CI/CD":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="M9 14l2 2 4-4" />
        </svg>
      );
    case "Test Execution":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      );
    case "Quality Assurance":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
  }
}

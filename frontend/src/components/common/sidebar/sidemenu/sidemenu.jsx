export const MenuItems = [
  {
    path: `${import.meta.env.BASE_URL}dashboard`,
    icon: <i className="fe fe-airplay"></i>,
    type: "link",
    selected: false,
    active: false,
    title: "Dashboard",
  },
  // Subdatabase - Mise à jour
  {
    icon: <i className="fe fe-box"></i>, // Icône du bouton Subdatabase avec flèche
    type: "sub",
    Name: "",
    active: false,
    selected: false,
    badge: "",
    badgetxt: "",
    class: "",
    title: "Subdatabase",
    children: [
      {
        path: `${import.meta.env.BASE_URL}Subdatabase/Account-ProjectName`,
        title: "Account-ProjectName",
        type: "link",
        active: false,
        selected: false,
      },
      {
        path: `${import.meta.env.BASE_URL}Subdatabase/Category-Item`,
        title: "Category-Item",
        type: "link",
        active: false,
        selected: false,
      },
      {
        path: `${import.meta.env.BASE_URL}Subdatabase/AcceptanceTerm`,
        title: "AcceptanceTerm",
        type: "link",
        active: false,
        selected: false,
      },
    ],
  },
  
  // Working Days & Theme déplacés
  {
    icon: <i className="fe fe-calendar"></i>, // Icône de "Working Days"
    type: "link",
    path: `${import.meta.env.BASE_URL}Subdatabase/WorkingDays`,
    title: "Working Days Calendar **",
    active: false,
    selected: false,
  },
  {
    icon: <i className="fe fe-settings"></i>, // Icône de "Theme"
    type: "link",
    path: `${import.meta.env.BASE_URL}Subdatabase/Theme`,
    title: "Theme **",
    active: false,
    selected: false,
  },

  // Data Importation remains unchanged
  {
    icon: <i className="fe fe-database"></i>,
    type: "sub",
    Name: "",
    active: false,
    selected: false,
    badge: "",
    badgetxt: "",
    class: "",
    title: "Data Importation (Sys Huawei)",
    children: [
      {
        path: `${import.meta.env.BASE_URL}Subdatabase/SCS-PO-Database`,
        title: "SCS PO Database",
        type: "link",
        active: false,
        selected: false,
      },
      {
        path: `${import.meta.env.BASE_URL}Subdatabase/SCS-Acceptance`,
        title: "SCS Acceptance",
        type: "link",
        active: false,
        selected: false,
      },
      {
        path: `${import.meta.env.BASE_URL}Subdatabase/SCS-invoice`,
        title: "SCS invoice **",
        type: "link",
        active: false,
        selected: false,
      },
    ],
  },
  
  // Data Exportation remains unchanged
  {
    icon: <i className="fe fe-upload"></i>,
    type: "sub",
    Name: "",
    active: false,
    selected: false,
    badge: "",
    badgetxt: "",
    class: "",
    title: "Data Exportation",
    children: [
      {
        path: `${import.meta.env.BASE_URL}Subdatabase/Global-Database`,
        title: "Global Database",
        type: "link",
        active: false,
        selected: false,
      },
      {
        path: `${import.meta.env.BASE_URL}Subdatabase/Remaining-to-accept`,
        title: "Remaining to accept",
        type: "link",
        active: false,
        selected: false,
      },
      {
        path: `${import.meta.env.BASE_URL}Subdatabase/SCS-invoice-Sys-Huawei`,
        title: "SCS invoice (Sys Huawei) **",
        type: "link",
        active: false,
        selected: false,
      },
      {
        path: `${import.meta.env.BASE_URL}Subdatabase/History-Exportation`,
        title: "History Exportation",
        type: "link",
        active: false,
        selected: false,
      },
    ],
  },

  // Sub Menu remains unchanged
  {
    icon: <i className="fe fe-grid"></i>,
    type: 'sub', active: false, selected: false, title: 'Sub Menu', children: [
      { path: "", type: 'empty', active: false, selected: false, dirchange: false, title: 'Sub Menu-1' },
      {
        title: "Sub Menu-2", type: "sub", dirchange: false, selected: false, active: false, children: [
          { path: "", type: 'empty', active: false, dirchange: false, selected: false, title: 'Sub Menu-2-1' },
          {
            title: "Sub Menu-2-2", type: "sub", dirchange: false, selected: false, active: false, children: [
              { path: "", type: 'empty', active: false, dirchange: false, selected: false, title: 'Sub Menu-2-2-1' },
              { path: "", type: 'empty', active: false, dirchange: false, selected: false, title: 'Sub Menu-2-2-2' }
            ]
          },
        ]
      },
    ]
  },
];


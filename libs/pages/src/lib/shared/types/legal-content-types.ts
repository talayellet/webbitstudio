export interface PrivacyPolicyContent {
  title: string;
  lastUpdated: string;
  sections: {
    introduction: {
      title: string;
      content: string[];
    };
    dataCollection: {
      title: string;
      content: string[];
      items: string[];
    };
    dataUsage: {
      title: string;
      content: string[];
    };
    cookies: {
      title: string;
      content: string[];
    };
    dataSharing: {
      title: string;
      content: string[];
    };
    yourRights: {
      title: string;
      content: string[];
      rights: string[];
    };
    dataRetention: {
      title: string;
      content: string[];
      periods: string[];
    };
    dataBreachNotification: {
      title: string;
      content: string[];
      procedures: string[];
    };
    dataSecurity: {
      title: string;
      content: string[];
    };
    contact: {
      title: string;
      content: string[];
      email: string;
    };
  };
}

export interface TermsOfServiceContent {
  title: string;
  lastUpdated: string;
  sections: {
    acceptance: {
      title: string;
      content: string[];
    };
    services: {
      title: string;
      content: string[];
    };
    userResponsibilities: {
      title: string;
      content: string[];
      items: string[];
    };
    intellectualProperty: {
      title: string;
      content: string[];
    };
    payment: {
      title: string;
      content: string[];
    };
    termination: {
      title: string;
      content: string[];
    };
    warranties: {
      title: string;
      content: string[];
    };
    limitation: {
      title: string;
      content: string[];
    };
    modifications: {
      title: string;
      content: string[];
    };
    governingLaw: {
      title: string;
      content: string[];
    };
    jurisdiction: {
      title: string;
      content: string[];
    };
    contact: {
      title: string;
      content: string[];
    };
  };
}

export interface CookiePolicyContent {
  title: string;
  lastUpdated: string;
  sections: {
    introduction: {
      title: string;
      content: string[];
    };
    whatAreCookies: {
      title: string;
      content: string[];
    };
    howWeUseCookies: {
      title: string;
      content: string[];
    };
    typesOfCookies: {
      title: string;
      essential: {
        title: string;
        description: string;
        examples: string[];
      };
      analytics: {
        title: string;
        description: string;
        examples: string[];
      };
      functional: {
        title: string;
        description: string;
        examples: string[];
      };
    };
    managingCookies: {
      title: string;
      content: string[];
      browsers: string[];
    };
    thirdPartyCookies: {
      title: string;
      content: string[];
    };
    updates: {
      title: string;
      content: string[];
    };
    contact: {
      title: string;
      content: string[];
      email: string;
      emailLabel: string;
    };
  };
}

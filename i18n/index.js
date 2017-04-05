import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    HOME: {
      TITLE: 'Home',
    },
    LOGIN: {
      EMAIL: {
        PLACEHOLDER: 'EMAIL',
      },
      PASSWORD: {
        PLACEHOLDER: 'PASSWORD',
      },
      LOGIN_BUTTON: 'Login',
    },
    SIDEBAR: {
      NAV: {
        HOME: 'Home',
        BLANKPAGE: 'Blank Page',
      },
    },
    BLANKPAGE: {
      TITLE: 'Blank Page',
      BODY_CONTENT: 'Create Something Awesome . . .',
    },
    REDUCER: {
      LIST: [
        'React Native starter kit',
        'RN Navigator',
        'NB Easy Grid',
        'NativeBase',
        'CodePush',
        'Redux',
      ],
    },
  },
};

export default I18n;

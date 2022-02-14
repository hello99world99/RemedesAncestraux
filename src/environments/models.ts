export class User {
  displayName: string;
  email: string;
  // eslint-disable-next-line max-len
  photoURL = 'https://firebasestorage.googleapis.com/v0/b/remedes-ancestraux.appspot.com/o/Files%2Fimages%2Fface_medical.png?alt=media&token=7cf12a11-185d-4ef4-a9fd-f34c97e012e0';
  phoneNumber: string;
}

export class Config {
  inputStyles?: {[key: string]: any};
  containerStyles?: {[key: string]: any};
  allowKeyCodes?: string[];
  length: number;
  allowNumbersOnly?: boolean;
  inputClass?: string;
  containerClass?: string;
  isPasswordInput?: boolean;
  disableAutoFocus?: boolean;
  placeholder?: string;
  letterCase?: 'Upper'| 'Lower';
}

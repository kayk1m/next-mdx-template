const ENV_LIST = [] as const;
const PUBLIC_ENV_LIST = [] as const;

type EnvironmentVariable = typeof ENV_LIST[number];
type PublicEnvironmentVariable = `NEXT_PUBLIC_${typeof PUBLIC_ENV_LIST[number]}`;

export const isTest: () => boolean = () => {
  return process.env.NODE_ENV === 'test';
};

export const isDev: () => boolean = () => {
  return process.env.NODE_ENV === 'development';
};

export const isProd: () => boolean = () => {
  return process.env.NODE_ENV === 'production';
};

export const getEnv = (name: EnvironmentVariable) => {
  const val = process.env[name];

  if (val !== undefined) {
    return val;
  }

  if (!isTest()) {
    throw new Error(`Check 'env.local'. Missing environment variable ${name}`);
  }

  return '';
};

export const getPublicEnv = (name: PublicEnvironmentVariable) => {
  return getEnv(name as never);
};

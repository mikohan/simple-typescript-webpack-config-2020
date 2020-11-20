console.log('from second file');

export const second: (param: string) => void = (param) => {
  console.log(`${param} from second file`);
};

import fs from 'fs';
import rimraf from 'rimraf';

export const isSymlink = p => fs.lstatSync(p).isSymbolicLink();

export const removeSymlink = symlinkPath => fs.unlinkSync(symlinkPath);

export const cleanBeforeLink = symlinkPath => {
  if (fs.existsSync(symlinkPath)) {
    if (isSymlink(symlinkPath)) {
      console.log(`Symbolic link already exists in ${symlinkPath}`);
      console.log(`Removing symbolic link ${symlinkPath}`);
      removeSymlink(symlinkPath);
    } else {
      console.log(`Folder already exists ${symlinkPath}`);
      console.log(`Removing folder ${symlinkPath}`);
      rimraf.sync(symlinkPath);
    }
  }
};

export const createSymlink = (from, to) => {
  cleanBeforeLink(from);

  console.log(`Creating a symbolic link ${from} -> ${to}`);
  fs.symlinkSync(to, from);
};

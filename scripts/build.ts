import { execaCommandSync as exec } from 'execa';
import { copyPackageFiles, rmDist } 'lion-system';

rmDist();
exec('tsc');
copyPackageFiles();

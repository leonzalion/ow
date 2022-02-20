import { execaCommandSync as exec } from "execa";
import { copyPackageFiles, rmDist } from "lion-system";

rmDist();
exec("tsc");
copyPackageFiles();

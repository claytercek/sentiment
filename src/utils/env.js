// ensures that env variables are loaded before any other files
import dotEnvExtended from 'dotenv-extended';
export default dotEnvExtended.load({
	errorOnMissing: true
}); 

 
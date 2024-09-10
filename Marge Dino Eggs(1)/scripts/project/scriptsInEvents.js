


const scriptsInEvents = {

	async EsMain_Event63_Act1(runtime, localVars)
	{
		async function readFromCloudStorage(key) {
		  return new Promise((resolve, reject) => {
		    Telegram.WebApp.CloudStorage.getItem(key, (err, data) => {
		      if (err) {
		        reject(err);
		      } else {
		        resolve(data);
		      }
		    });
		  });
		}
		
		async function retrieveData() {
		  try {
		    const saveGame = await readFromCloudStorage('saveGame');
			const saveVariable = await readFromCloudStorage('saveVariable');
		
		    runtime.globalVars.saveGame = String(saveGame);
			runtime.globalVars.saveVariable = String(saveVariable);
			runtime.globalVars.loadComplite=true;
		
		  } catch (err) {
		    console.error('Error retrieving data from CloudStorage:', err);
		  }
		}
		
		retrieveData();
	},

	async EsMain_Event72_Act1(runtime, localVars)
	{
		Telegram.WebApp.CloudStorage.removeItem(localVars.key);
	},

	async EsMain_Event74_Act1(runtime, localVars)
	{
		Telegram.WebApp.CloudStorage.setItem(localVars.key,localVars.data);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;


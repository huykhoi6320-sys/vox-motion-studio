import {Config} from '@remotion/cli/config';
import {existsSync} from 'node:fs';
const browser=process.env.REMOTION_BROWSER_EXECUTABLE || ['/usr/bin/chromium','/usr/bin/google-chrome','/usr/bin/chromium-browser'].find(existsSync);
if(browser) Config.setBrowserExecutable(browser);
Config.setConcurrency(2);

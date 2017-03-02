/* Copyright 2017 Mozilla
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. */

// App-specific preferences, in alphabetical order.

// Disabled, because for some reason it dumps:
// JavaScript error: resource://gre/components/nsPrompter.js, line 350: NS_ERROR_NOT_AVAILABLE: Cannot call openModalWindow on a hidden window
// pref("browser.dom.window.dump.enabled", true);

pref("devtools.chrome.enabled", true);
pref("devtools.debugger.prompt-connection", false);
pref("devtools.debugger.remote-enabled", true);
pref("devtools.selfxss.count", 5);
pref("dom.mozBrowserFramesEnabled", true);
pref("javascript.options.showInConsole", true);

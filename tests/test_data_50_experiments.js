/**
 * Copyright 2016, Optimizely
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cloneDeep = require('lodash/cloneDeep');

var config = {
  experiments: [
    {
      status: "Running",
      key: "testExperiment31",
      trafficAllocation: [
        {
          entityId: "6383523065",
          endOfRange: 5000
        },
        {
          entityId: "6383523066",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6383523065",
          key: "control"
        },
        {
          id: "6383523066",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6313973431"
    },
    {
      status: "Running",
      key: "testExperiment15",
      trafficAllocation: [
        {
          entityId: "6363413697",
          endOfRange: 5000
        },
        {
          entityId: "6363413698",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6363413697",
          key: "control"
        },
        {
          id: "6363413698",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6332666164"
    },
    {
      status: "Running",
      key: "testExperiment33",
      trafficAllocation: [
        {
          entityId: "6330789404",
          endOfRange: 5000
        },
        {
          entityId: "6330789405",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6330789404",
          key: "control"
        },
        {
          id: "6330789405",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6338678718"
    },
    {
      status: "Running",
      key: "testExperiment38",
      trafficAllocation: [
        {
          entityId: "6376706101",
          endOfRange: 5000
        },
        {
          entityId: "6376706102",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6376706101",
          key: "control"
        },
        {
          id: "6376706102",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6338678719"
    },
    {
      status: "Running",
      key: "testExperiment44",
      trafficAllocation: [
        {
          entityId: "6316734590",
          endOfRange: 5000
        },
        {
          entityId: "6316734591",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6316734590",
          key: "control"
        },
        {
          id: "6316734591",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6355784786"
    },
    {
      status: "Running",
      key: "testExperimentWithFirefoxAudience",
      trafficAllocation: [
        {
          entityId: "6362476365",
          endOfRange: 5000
        },
        {
          entityId: "6362476366",
          endOfRange: 10000
        }
      ],
      audienceIds: [
        "6373742627"
      ],
      variations: [
        {
          id: "6362476365",
          key: "control"
        },
        {
          id: "6362476366",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6359356006"
    },
    {
      status: "Running",
      key: "testExperiment14",
      trafficAllocation: [
        {
          entityId: "6327476066",
          endOfRange: 5000
        },
        {
          entityId: "6327476067",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6327476066",
          key: "control"
        },
        {
          id: "6327476067",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6360796560"
    },
    {
      status: "Running",
      key: "testExperiment46",
      trafficAllocation: [
        {
          entityId: "6357247500",
          endOfRange: 5000
        },
        {
          entityId: "6357247501",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6357247500",
          key: "control"
        },
        {
          id: "6357247501",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6361359596"
    },
    {
      status: "Running",
      key: "testExperiment16",
      trafficAllocation: [
        {
          entityId: "6378191544",
          endOfRange: 5000
        },
        {
          entityId: "6378191545",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6378191544",
          key: "control"
        },
        {
          id: "6378191545",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6361743077"
    },
    {
      status: "Running",
      key: "testExperiment10",
      trafficAllocation: [
        {
          entityId: "6372300744",
          endOfRange: 5000
        },
        {
          entityId: "6372300745",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6372300744",
          key: "control"
        },
        {
          id: "6372300745",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6362476358"
    },
    {
      status: "Running",
      key: "testExperiment11",
      trafficAllocation: [
        {
          entityId: "6357247497",
          endOfRange: 5000
        },
        {
          entityId: "6357247498",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6357247497",
          key: "control"
        },
        {
          id: "6357247498",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6362476359"
    },
    {
      status: "Running",
      key: "testExperiment12",
      trafficAllocation: [
        {
          entityId: "6368497829",
          endOfRange: 5000
        },
        {
          entityId: "6368497830",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6368497829",
          key: "control"
        },
        {
          id: "6368497830",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6363607946"
    },
    {
      status: "Running",
      key: "testExperiment7",
      trafficAllocation: [
        {
          entityId: "6386590519",
          endOfRange: 5000
        },
        {
          entityId: "6386590520",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6386590519",
          key: "control"
        },
        {
          id: "6386590520",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6364882055"
    },
    {
      status: "Running",
      key: "testExperiment6",
      trafficAllocation: [
        {
          entityId: "6385481560",
          endOfRange: 5000
        },
        {
          entityId: "6385481561",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6385481560",
          key: "control"
        },
        {
          id: "6385481561",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6366023126"
    },
    {
      status: "Running",
      key: "testExperiment23",
      trafficAllocation: [
        {
          entityId: "6375122007",
          endOfRange: 5000
        },
        {
          entityId: "6375122008",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6375122007",
          key: "control"
        },
        {
          id: "6375122008",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6367902584"
    },
    {
      status: "Running",
      key: "testExperiment13",
      trafficAllocation: [
        {
          entityId: "6360762679",
          endOfRange: 5000
        },
        {
          entityId: "6360762680",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6360762679",
          key: "control"
        },
        {
          id: "6360762680",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6367922509"
    },
    {
      status: "Running",
      key: "testExperiment39",
      trafficAllocation: [
        {
          entityId: "6341311988",
          endOfRange: 5000
        },
        {
          entityId: "6341311989",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6341311988",
          key: "control"
        },
        {
          id: "6341311989",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6369992702"
    },
    {
      status: "Running",
      key: "testExperiment4",
      trafficAllocation: [
        {
          entityId: "6370014876",
          endOfRange: 5000
        },
        {
          entityId: "6370014877",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6370014876",
          key: "control"
        },
        {
          id: "6370014877",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6370815084"
    },
    {
      status: "Running",
      key: "testExperiment17",
      trafficAllocation: [
        {
          entityId: "6384651930",
          endOfRange: 5000
        },
        {
          entityId: "6384651931",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6384651930",
          key: "control"
        },
        {
          id: "6384651931",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6371742027"
    },
    {
      status: "Running",
      key: "testExperiment42",
      trafficAllocation: [
        {
          entityId: "6371581616",
          endOfRange: 5000
        },
        {
          entityId: "6371581617",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6371581616",
          key: "control"
        },
        {
          id: "6371581617",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6374064265"
    },
    {
      status: "Not started",
      key: "testExperimentNotRunning",
      trafficAllocation: [
        {
          entityId: "6380740985",
          endOfRange: 5000
        },
        {
          entityId: "6380740986",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6380740985",
          key: "control"
        },
        {
          id: "6380740986",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6375231238"
    },
    {
      status: "Running",
      key: "testExperiment36",
      trafficAllocation: [
        {
          entityId: "6380164945",
          endOfRange: 5000
        },
        {
          entityId: "6380164946",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6380164945",
          key: "control"
        },
        {
          id: "6380164946",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6375494974"
    },
    {
      status: "Running",
      key: "testExperiment45",
      trafficAllocation: [
        {
          entityId: "6374765096",
          endOfRange: 5000
        },
        {
          entityId: "6374765097",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6374765096",
          key: "control"
        },
        {
          id: "6374765097",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6375595048"
    },
    {
      status: "Running",
      key: "testExperiment43",
      trafficAllocation: [
        {
          entityId: "6385191624",
          endOfRange: 5000
        },
        {
          entityId: "6385191625",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6385191624",
          key: "control"
        },
        {
          id: "6385191625",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6376141968"
    },
    {
      status: "Running",
      key: "testExperiment25",
      trafficAllocation: [
        {
          entityId: "6368955066",
          endOfRange: 5000
        },
        {
          entityId: "6368955067",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6368955066",
          key: "control"
        },
        {
          id: "6368955067",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6376658685"
    },
    {
      status: "Running",
      key: "testExperiment2",
      trafficAllocation: [
        {
          entityId: "6382040994",
          endOfRange: 5000
        },
        {
          entityId: "6382040995",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6382040994",
          key: "control"
        },
        {
          id: "6382040995",
          key: "variation"
        }
      ],
      forcedVariations: {
        variation_user: "variation",
        control_user: "control"
      },
      id: "6377001018"
    },
    {
      status: "Running",
      key: "testExperiment18",
      trafficAllocation: [
        {
          entityId: "6370582521",
          endOfRange: 5000
        },
        {
          entityId: "6370582522",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6370582521",
          key: "control"
        },
        {
          id: "6370582522",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6377202148"
    },
    {
      status: "Running",
      key: "testExperiment24",
      trafficAllocation: [
        {
          entityId: "6381612278",
          endOfRange: 5000
        },
        {
          entityId: "6381612279",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6381612278",
          key: "control"
        },
        {
          id: "6381612279",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6377723605"
    },
    {
      status: "Running",
      key: "testExperiment19",
      trafficAllocation: [
        {
          entityId: "6362476361",
          endOfRange: 5000
        },
        {
          entityId: "6362476362",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6362476361",
          key: "control"
        },
        {
          id: "6362476362",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6379205044"
    },
    {
      status: "Running",
      key: "testExperiment20",
      trafficAllocation: [
        {
          entityId: "6370537428",
          endOfRange: 5000
        },
        {
          entityId: "6370537429",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6370537428",
          key: "control"
        },
        {
          id: "6370537429",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6379205045"
    },
    {
      status: "Running",
      key: "testExperiment28",
      trafficAllocation: [
        {
          entityId: "6387291313",
          endOfRange: 5000
        },
        {
          entityId: "6387291314",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6387291313",
          key: "control"
        },
        {
          id: "6387291314",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6379841378"
    },
    {
      status: "Running",
      key: "testExperiment35",
      trafficAllocation: [
        {
          entityId: "6375332081",
          endOfRange: 5000
        },
        {
          entityId: "6375332082",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6375332081",
          key: "control"
        },
        {
          id: "6375332082",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6379900650"
    },
    {
      status: "Running",
      key: "testExperiment1",
      trafficAllocation: [
        {
          entityId: "6355235181",
          endOfRange: 5000
        },
        {
          entityId: "6355235182",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6355235181",
          key: "control"
        },
        {
          id: "6355235182",
          key: "variation"
        }
      ],
      forcedVariations: {
        variation_user: "variation",
        control_user: "control"
      },
      id: "6380251600"
    },
    {
      status: "Running",
      key: "testExperiment8",
      trafficAllocation: [
        {
          entityId: "6310506102",
          endOfRange: 5000
        },
        {
          entityId: "6310506103",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6310506102",
          key: "control"
        },
        {
          id: "6310506103",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6380932373"
    },
    {
      status: "Running",
      key: "testExperiment3",
      trafficAllocation: [
        {
          entityId: "6373612240",
          endOfRange: 5000
        },
        {
          entityId: "6373612241",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6373612240",
          key: "control"
        },
        {
          id: "6373612241",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6380971484"
    },
    {
      status: "Running",
      key: "testExperiment22",
      trafficAllocation: [
        {
          entityId: "6360796561",
          endOfRange: 5000
        },
        {
          entityId: "6360796562",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6360796561",
          key: "control"
        },
        {
          id: "6360796562",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6381631585"
    },
    {
      status: "Running",
      key: "testExperiment37",
      trafficAllocation: [
        {
          entityId: "6356824684",
          endOfRange: 5000
        },
        {
          entityId: "6356824685",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6356824684",
          key: "control"
        },
        {
          id: "6356824685",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6381732143"
    },
    {
      status: "Running",
      key: "testExperiment41",
      trafficAllocation: [
        {
          entityId: "6389170550",
          endOfRange: 5000
        },
        {
          entityId: "6389170551",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6389170550",
          key: "control"
        },
        {
          id: "6389170551",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6381781177"
    },
    {
      status: "Running",
      key: "testExperiment27",
      trafficAllocation: [
        {
          entityId: "6372591085",
          endOfRange: 5000
        },
        {
          entityId: "6372591086",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6372591085",
          key: "control"
        },
        {
          id: "6372591086",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6382300680"
    },
    {
      status: "Running",
      key: "testExperiment26",
      trafficAllocation: [
        {
          entityId: "6375602097",
          endOfRange: 5000
        },
        {
          entityId: "6375602098",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6375602097",
          key: "control"
        },
        {
          id: "6375602098",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6382682166"
    },
    {
      status: "Running",
      key: "testExperiment9",
      trafficAllocation: [
        {
          entityId: "6376221556",
          endOfRange: 5000
        },
        {
          entityId: "6376221557",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6376221556",
          key: "control"
        },
        {
          id: "6376221557",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6382950966"
    },
    {
      status: "Running",
      key: "testExperiment29",
      trafficAllocation: [
        {
          entityId: "6382070548",
          endOfRange: 5000
        },
        {
          entityId: "6382070549",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6382070548",
          key: "control"
        },
        {
          id: "6382070549",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6383120500"
    },
    {
      status: "Running",
      key: "testExperiment32",
      trafficAllocation: [
        {
          entityId: "6391210101",
          endOfRange: 5000
        },
        {
          entityId: "6391210102",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6391210101",
          key: "control"
        },
        {
          id: "6391210102",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6383430268"
    },
    {
      status: "Running",
      key: "testExperiment30",
      trafficAllocation: [
        {
          entityId: "6364835927",
          endOfRange: 5000
        },
        {
          entityId: "6364835928",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6364835927",
          key: "control"
        },
        {
          id: "6364835928",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6384711622"
    },
    {
      status: "Running",
      key: "testExperiment34",
      trafficAllocation: [
        {
          entityId: "6390151025",
          endOfRange: 5000
        },
        {
          entityId: "6390151026",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6390151025",
          key: "control"
        },
        {
          id: "6390151026",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6384861073"
    },
    {
      status: "Running",
      key: "testExperiment21",
      trafficAllocation: [
        {
          entityId: "6384881124",
          endOfRange: 5000
        },
        {
          entityId: "6384881125",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6384881124",
          key: "control"
        },
        {
          id: "6384881125",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6385551136"
    },
    {
      status: "Running",
      key: "testExperiment40",
      trafficAllocation: [
        {
          entityId: "6387261935",
          endOfRange: 5000
        },
        {
          entityId: "6387261936",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6387261935",
          key: "control"
        },
        {
          id: "6387261936",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6387252155"
    },
    {
      status: "Running",
      key: "testExperiment5",
      trafficAllocation: [
        {
          entityId: "6312093242",
          endOfRange: 5000
        },
        {
          entityId: "6312093243",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6312093242",
          key: "control"
        },
        {
          id: "6312093243",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6388170688"
    }
  ],
  version: "1",
  audiences: [
    {
      conditions: '["and", ["or", ["or", {"name": "browser_type", "type": "custom_dimension", "value": "android"}]]]',
      id: "6366023138",
      name: "Android users"
    },
    {
      conditions: '["and", ["or", ["or", {"name": "browser_type", "type": "custom_dimension", "value": "firefox"}]]]',
      id: "6373742627",
      name: "Firefox users"
    },
    {
      conditions: '["and", ["or", ["or", {"name": "browser_type", "type": "custom_dimension", "value": "ie"}]]]',
      id: "6376161539",
      name: "IE users"
    },
    {
      conditions: '["and", ["or", ["or", {"name": "browser_type", "type": "custom_dimension", "value": "desktop"}]]]',
      id: "6376714797",
      name: "Desktop users"
    },
    {
      conditions: '["and", ["or", ["or", {"name": "browser_type", "type": "custom_dimension", "value": "safari"}]]]',
      id: "6381732153",
      name: "Safari users"
    },
    {
      conditions: '["and", ["or", ["or", {"name": "browser_type", "type": "custom_dimension", "value": "opera"}]]]',
      id: "6383110825",
      name: "Opera users"
    },
    {
      conditions: '["and", ["or", ["or", {"name": "browser_type", "type": "custom_dimension", "value": "tablet"}]]]',
      id: "6387291324",
      name: "Tablet users"
    },
    {
      conditions: '["and", ["or", ["or", {"name": "browser_type", "type": "custom_dimension", "value": "chrome"}]]]',
      id: "6388221254",
      name: "Chrome users"
    }
  ],
  dimensions: [
    {
      id: "6380961481",
      key: "browser_type",
      segmentId: "6384711633"
    }
  ],
  groups: [
    {
      policy: "random",
      trafficAllocation: [
        {
          entityId: "6454500206",
          endOfRange: 5000
        },
        {
          entityId: "6456310069",
          endOfRange: 10000
        }
      ],
      experiments: [
        {
          status: "Running",
          percentageIncluded: 5000,
          key: "mutex_exp1",
          trafficAllocation: [
            {
              entityId: "6413061880",
              endOfRange: 5000
            },
            {
              entityId: "6413061881",
              endOfRange: 10000
            }
          ],
          audienceIds: [
            "6388221254"
          ],
          variations: [
            {
              id: "6413061880",
              key: "a"
            },
            {
              id: "6413061881",
              key: "b"
            }
          ],
          forcedVariations: { },
          id: "6454500206"
        },
        {
          status: "Running",
          percentageIncluded: 5000,
          key: "mutex_exp2",
          trafficAllocation: [
            {
              entityId: "6445960276",
              endOfRange: 5000
            },
            {
              entityId: "6445960277",
              endOfRange: 10000
            }
          ],
          audienceIds: [ ],
          variations: [
            {
              id: "6445960276",
              key: "a"
            },
            {
              id: "6445960277",
              key: "b"
            }
          ],
          forcedVariations: {
            user_b: "b",
            user_a: "a"
          },
          id: "6456310069"
        }
      ],
      id: "6455220163"
    }
  ],
  projectId: "6372300739",
  accountId: "6365361536",
  events: [
    {
      experimentIds: [
        "6359356006"
      ],
      id: "6357247504",
      key: "testEventWithAudiences"
    },
    {
      experimentIds: [
        "6456310069"
      ],
      id: "6357622693",
      key: "testEventWithMultipleGroupedExperiments"
    },
    {
      experimentIds: [
        "6375231238"
      ],
      id: "6367473109",
      key: "testEventWithExperimentNotRunning"
    },
    {
      experimentIds: [
        "6380251600"
      ],
      id: "6370537431",
      key: "testEvent"
    },
    {
      experimentIds: [ ],
      id: "6377001020",
      key: "testEventWithoutExperiments"
    },
    {
      experimentIds: [
        "6375231238",
        "6364882055",
        "6382300680",
        "6374064265",
        "6363607946",
        "6370815084",
        "6360796560",
        "6384861073",
        "6380932373",
        "6385551136",
        "6376141968",
        "6375595048",
        "6384711622",
        "6381732143",
        "6332666164",
        "6379205045",
        "6382682166",
        "6313973431",
        "6381781177",
        "6377001018",
        "6387252155",
        "6375494974",
        "6338678719",
        "6388170688",
        "6456310069",
        "6362476358",
        "6362476359",
        "6379205044",
        "6382950966",
        "6371742027",
        "6367922509",
        "6380251600",
        "6355784786",
        "6377723605",
        "6366023126",
        "6380971484",
        "6381631585",
        "6379841378",
        "6377202148",
        "6361743077",
        "6359356006",
        "6379900650",
        "6361359596",
        "6454500206",
        "6383120500",
        "6367902584",
        "6338678718",
        "6383430268",
        "6376658685",
        "6369992702"
      ],
      id: "6385432091",
      key: "testEventWithMultipleExperiments"
    },
    {
      experimentIds: [
        "6377001018",
        "6359356006",
        "6454500206"
      ],
      id: "6370815083",
      key: "Total Revenue"
    }
  ],
  revision: "58"
};

function getTestProjectConfig() {
  return cloneDeep(config);
}

module.exports = {
  getTestProjectConfig: getTestProjectConfig,
};

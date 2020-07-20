
<script src="ethjs.min.js"> </script>
<script src="web3.min.js"> </script>
<script src="jquery.min.js"> </script>

window.addEventListener('load', async () => {
	if(typeof web3 == undefined) {
	alert("Please install MetaMask extension in your browser");
	}
	if (window.ethereum) {
		window.web3 = new Web3(ethereum);
		try {
			await ethereum.enable();
			startApp(web3);
		} catch (error) {
			console.log(error);
		}
	}
	else if (window.web3) {
		window.web3 = new Web3(web3.currentProvider);
		startApp(web3);
	}
	else {
		alert("Please install MetaMask extension in your browser");
	}
});
const abi = [[	{		"constant": false,		"inputs": [			{				"name": "_vMake",				"type": "string"			},			{				"name": "_vModel",				"type": "string"			},			{				"name": "_vPrice",				"type": "uint256"			}		],		"name": "addNewCar",		"outputs": [],		"payable": false,		"stateMutability": "nonpayable",		"type": "function"	},	{		"constant": false,		"inputs": [			{				"name": "_vID",				"type": "uint256"			}		],		"name": "buyCar",		"outputs": [],		"payable": true,		"stateMutability": "payable",		"type": "function"	},	{		"constant": false,		"inputs": [			{				"name": "_pName",				"type": "string"			},			{				"name": "_pCNIC",				"type": "uint256"			}		],		"name": "setUserInfo",		"outputs": [],		"payable": false,		"stateMutability": "nonpayable",		"type": "function"	},	{		"inputs": [],		"payable": false,		"stateMutability": "nonpayable",		"type": "constructor"	},	{		"constant": true,		"inputs": [			{				"name": "_vID",				"type": "uint256"			}		],		"name": "getCar",		"outputs": [			{				"name": "",				"type": "string"			},			{				"name": "",				"type": "string"			},			{				"name": "",				"type": "bool"			},			{				"name": "",				"type": "uint256"			},			{				"name": "",				"type": "address"			}		],		"payable": false,		"stateMutability": "view",		"type": "function"	},	{		"constant": true,		"inputs": [],		"name": "getTotalNumber",		"outputs": [			{				"name": "",				"type": "uint256"			}		],		"payable": false,		"stateMutability": "view",		"type": "function"	},	{		"constant": true,		"inputs": [],		"name": "getUserInfo",		"outputs": [			{				"name": "",				"type": "string"			},			{				"name": "",				"type": "uint256"			}		],		"payable": false,		"stateMutability": "view",		"type": "function"	},	{		"constant": true,		"inputs": [			{				"name": "carID",				"type": "uint256"			}		],		"name": "ViewOwnership",		"outputs": [			{				"name": "",				"type": "bool"			}		],		"payable": false,		"stateMutability": "view",		"type": "function"	}]];
const contract_address = '0xeD1b90A759672BE3D3B21b0BfFb1a3C55A029095';
var eth = null;
var contract;

function startApp(web3) {
	eth = new Eth(web3.currentProvider);
	contract = eth.contract(abi).at(contract_address);
}

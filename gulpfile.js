const fs = require('fs')
const { series } = require('gulp')
var argv = require('yargs').argv

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const newComponentName = capitalizeFirstLetter(argv.N)
const componentsDir = argv.D ? argv.D : 'src/components/'
const newComponentDir = componentsDir+newComponentName

console.log(argv.D)

const newComponentIndexFileContent = `import React from 'react'
import styles from './${newComponentName}.module.scss'

const ${newComponentName} = (props) => {
	return(
		<div className={styles.${newComponentName.toLowerCase()}}>
			${newComponentName}
		</div>
	)
}

export default ${newComponentName}`

const newComponentdStyleFileContent = `.${newComponentName.toLowerCase()} {
	
}`

function createComponentFolder(cb) {
	if (!fs.existsSync(newComponentDir)){
    fs.mkdirSync(newComponentDir);
		cb()
	} else {
		cb(new Error('Compontnet '+newComponentName+' already exists' ))
	}
}

function createComponentStyleFile(cb) {
  fs.writeFileSync(`${newComponentDir}/${newComponentName}.module.scss`, newComponentdStyleFileContent)
  cb()
}

function createComponentIndexFile(cb) {
  fs.writeFileSync(`${newComponentDir}/index.jsx`, newComponentIndexFileContent)
  cb()
}

exports.createComponent = series(createComponentFolder, createComponentStyleFile, createComponentIndexFile)
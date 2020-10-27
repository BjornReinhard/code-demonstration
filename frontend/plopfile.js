const COMPONENT_TYPE = {
    FUNCTIONAL: 'functional',
    CLASS: 'class'
};

const DIRECTORY = {
    LAYOUT: {NAME: 'layout', PATH: '/layout'},
    COMMON_COMPONENTS: {NAME: 'common components', PATH: '/common/components'},
    COMMON_SERVICES: {NAME: 'common services', PATH: '/common/services'}
};

const PROMPTS = {
    CHOOSE_COMPONENT_TYPE: {
        type: 'list',
        name: "componentType",
        message: 'Choose your component',
        choices: [COMPONENT_TYPE.FUNCTIONAL, COMPONENT_TYPE.CLASS]
    },
    READ_COMPONENT_NAME: {
        type: "input",
        name: "componentName"
    },
    CHOOSE_COMPONENT_DIRECTORY: {
        type: 'list',
        name: "directory",
        message: 'Choose directory',
        choices: ['layout', 'common components', 'common services']
    }
}

const ACTION_PATH = {
    FUNCTIONAL_COMPONENT: 'plop-templates/functional.component.hbs',
    CLASS_COMPONENT: 'plop-templates/class.component.hbs',
    CSS_MODULE: 'plop-templates/module.css.hbs',
    INDEX_FILE: 'plop-templates/index.hbs'
};

class Actions {
    actions = [];
    componentDirectory = 'src';

    constructor(componentDirectory) {
        this.componentDirectory += this.chooseDirectoryPath(componentDirectory);
    }

    add(templateFilePath, generatedFilePath) {
        this.actions.push({
            type: 'add',
            templateFile: templateFilePath,
            path: `${this.componentDirectory}${generatedFilePath}`
        });
    }

    chooseDirectoryPath(directory) {
        switch (directory) {
            case DIRECTORY.LAYOUT.NAME:
                return DIRECTORY.LAYOUT.PATH;
            case DIRECTORY.COMMON_COMPONENTS.NAME:
                return DIRECTORY.COMMON_COMPONENTS.PATH;
            case DIRECTORY.COMMON_SERVICES.NAME:
                return DIRECTORY.COMMON_SERVICES.PATH;
        }
        return '';
    }

    getAll() {
        return this.actions;
    }
}

module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'Creating new react components',
        prompts: [
            PROMPTS.CHOOSE_COMPONENT_TYPE,
            PROMPTS.READ_COMPONENT_NAME,
            PROMPTS.CHOOSE_COMPONENT_DIRECTORY
        ],
        actions: function (data) {
            const actions = new Actions(data.directory);

            if (data.componentType === COMPONENT_TYPE.FUNCTIONAL) {
                actions.add(ACTION_PATH.FUNCTIONAL_COMPONENT,
                    '/{{pascalCase componentName}}/{{pascalCase componentName}}.tsx')
            } else {
                actions.add(ACTION_PATH.CLASS_COMPONENT,
                    '/{{pascalCase componentName}}/{{pascalCase componentName}}.tsx');
            }

            actions.add(ACTION_PATH.CSS_MODULE,
                '/{{pascalCase componentName}}/{{pascalCase componentName}}.module.css');

            actions.add(ACTION_PATH.INDEX_FILE,'/{{pascalCase componentName}}/index.ts');

            return actions.getAll();
        }
    });
};

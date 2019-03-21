const path = require('path');

const Detail  = '详情页面';
const Update  = '更新页面';

module.exports = function (plop) {
    // controller generator
    plop.setGenerator('controller', {
        description: 'application controller logic',
        prompts: [
            {
                type: 'list',
                name: 'type',
                message: '请选择页面类型:',
                choices: () => [
                    Detail,
                    Update
                ]
            },
            {
                type: 'input',
                name: 'folder',
                message: '请输入路径(相对于app/pages/)'
            },
            {
                type: 'input',
                name: 'className',
                message: '请输入 当前文件的Class 名(大驼峰): Update',
                default: ''
            }
        ],
        actions: data => {
            const getPath = (fileName) => {
                return path.join('../app/pages/', data.folder, `{{properCase className}}/${fileName}`);
            };

            let actions;
            if (data.type === Detail) {
                const listPath = getPath('index.js');
                const listTemplate = './templates/Detail/index.hbs';
                // const lessPath = getPath('index.less');
                // const lessTemplate = './templates/list/less.hbs';
                actions = [
                    {
                        type: 'add',
                        path: listPath,
                        templateFile: listTemplate,
                        abortOnFail: true
                    }
                    // {
                    //     type: 'add',
                    //     path: lessPath,
                    //     templateFile: lessTemplate,
                    //     abortOnFail: true
                    // }
                ];
            }
            if (data.type === Update) {
                const listPath = getPath('index.js');
                const listTemplate = './templates/Update/index.hbs';
                // const lessPath = getPath('index.less');
                // const lessTemplate = './templates/list-with-filter/less.hbs';
                actions = [
                    {
                        type: 'add',
                        path: listPath,
                        templateFile: listTemplate,
                        abortOnFail: true
                    }
                    // {
                    //     type: 'add',
                    //     path: lessPath,
                    //     templateFile: lessTemplate,
                    //     abortOnFail: true
                    // }
                ];
            }
            return actions;
        }
    });
};

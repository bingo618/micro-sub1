import {IConfig} from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
    treeShaking: true,
    base: `/app1`,
    publicPath: '/app1/',
    outputPath: './dist/app1',
    mountElementId: 'app1',
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: true,
            dva: true,
            dynamicImport: {webpackChunkName: true},
            title: 'micro-sub1',
            dll: false,
            routes: {
                exclude: [
                    /models\//,
                    /services\//,
                    /model\.(t|j)sx?$/,
                    /service\.(t|j)sx?$/,
                    /components\//,
                ],
            },
        },],
        ['@umijs/plugin-qiankun/slave',{}],
    ],
};

export default config;

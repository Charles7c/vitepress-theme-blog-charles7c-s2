---
title: 更新日志（v4.x.x~最新版本）
category: 更新日志
outline: 2
lastUpdated: false
---

# 更新日志（v4.x.x~最新版本）

## 版本支持

| 分支    | 初始发布       | 终止支持       | 最新                                                                           | 开发                                                                                                                    | Java | SpringBoot | Vue   |
|:------|:-----------|:-----------|:-----------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------| :------ |------------|-------|
| 4.2.x | -          | -          | -                                                                            | {{ Math.ceil(Math.abs(new Date().getTime() - new Date('2025-11-18').getTime()) / (1000 * 3600 * 24)) }} 天             |   17      | 3.4.10           | 3.5.4 |
| 4.1.x | 2025-11-17 | -          | [v4.1.0](https://github.com/continew-org/continew-admin/releases/tag/v4.1.0) | {{ Math.ceil(Math.abs(new Date().getTime() - new Date('2025-07-28').getTime()) / (1000 * 3600 * 24)) }} 天             |   17      | 3.3.12     | 3.5.4 |
| 4.0.x | 2025-07-27 | 2025-11-17          | [v4.0.0](https://github.com/continew-org/continew-admin/releases/tag/v4.0.0) | {{ Math.ceil(Math.abs(new Date('2025-07-27').getTime() - new Date('2025-06-14').getTime()) / (1000 * 3600 * 24)) }} 天 |   17      | 3.3.12     | 3.5.4 |
| 3.7.x | 2025-06-13 | 2025-06-13 | [v3.7.0](https://github.com/continew-org/continew-admin/releases/tag/v3.7.0) | {{ Math.ceil(Math.abs(new Date().getTime('2025-06-13') - new Date('2025-04-14').getTime()) / (1000 * 3600 * 24)) }} 天 |   17      | 3.3.11     | 3.5.4 |

## [v4.1.0](https://github.com/continew-org/continew-admin/compare/v4.0.0...v4.1.0) (2025-11-17)

### ✨ 新特性

- 新增多文件分片上传功能，支持本地存储和S3存储 (GitCode#11@kiki1373639299) ([af0f58a](https://github.com/continew-org/continew-admin/commit/af0f58a096c737757b51086af3aee4309aaef572))
- 新增微信开放平台登录配置示例 ([6e7db4f](https://github.com/continew-org/continew-admin/commit/6e7db4f418e23527cf62fadffbdc0a64199cc361))
- 调整物理删除为逻辑删除（适配已有唯一索引） ([fbc0269](https://github.com/continew-org/continew-admin/commit/fbc0269b3c80ba4be8c82e095bd45dd7a6ae4b00))
- 新增支持文件回收站 ([41583ea](https://github.com/continew-org/continew-admin/commit/41583ea61be8da73e9805a7175cca765fda2d0e4))
- 【前端】新增分片文件上传 (Gitee#69@kiki1373639299) ([a3ce4b5](https://github.com/continew-org/continew-admin-ui/commit/a3ce4b508a0d146d62163185a4d71a9c1425eaf7))
- 【前端】新增微信开放平台登录及绑定按钮 ([0f73944](https://github.com/continew-org/continew-admin-ui/commit/0f739442ac57fc230210c195904e12d1402be3b7))
- 【前端】支持双列布局等更多布局选项并优化布局切换功能（同步gi-demo） (GitCode#11@kiki1373639299) ([704aacc](https://github.com/continew-org/continew-admin-ui/commit/704aacc38f655fc55b11ca4d64380334392cc073)) ([e5c9d2f](https://github.com/continew-org/continew-admin-ui/commit/e5c9d2f12f1a76e7b5186c59f0accbc774c63509)) ([e72e2ed](https://github.com/continew-org/continew-admin-ui/commit/e72e2ed1f8fbca2283d71f293afd34c02e5232d2)) ([1a0429d](https://github.com/continew-org/continew-admin-ui/commit/1a0429dfb696b1fa0d24a015fce5b4e745b5cf38))
- 【前端】新增支持文件回收站 ([7e2c2ba](https://github.com/continew-org/continew-admin-ui/commit/7e2c2ba647a963c4d60aaeb68bcebf9566a84cfb))

### 💎 功能优化

- 优化部分配置注释 ([ac82503](https://github.com/continew-org/continew-admin/commit/ac825032e23a3deca6abc89ea86cd26e6e5bc602))
- 简化命名 isSuperAdminUser() => isSuperAdmin(), isTenantAdminUser() => isTenantAdmin() ([61a6cac](https://github.com/continew-org/continew-admin/commit/61a6cac71469442dbd923b0047ceda55940e7bb3))
- 统一命名风格 (名词 + 动词 + 类型) ([5bc5666](https://github.com/continew-org/continew-admin/commit/5bc5666be97f5e50c190abc3126009357e40f778))
- 简化前端模板命名，例如：UserAddDrawer => AddDrawer ([b305dd7](https://github.com/continew-org/continew-admin/commit/b305dd7e5352167a7f8a22c46329468a36ea8cc7))
- 优化加密参数的 API 接口 example 示例说明 ([b5acdb1](https://github.com/continew-org/continew-admin/commit/b5acdb1c1c001601830dbcabe7cbd9709938f2cb))
- 修改存储配置时，保持Secret Key为空将不更改 ([2d86b0f](https://github.com/continew-org/continew-admin/commit/2d86b0f2492399395052a787bd29d231fa6b9120))
- UserContextHolder ThreadLocal => TransmittableThreadLocal ([3f01a5c](https://github.com/continew-org/continew-admin/commit/3f01a5c84a2ae19b20ddbd7949a1c450d7a10037))
- 用户导入多部门分隔符变更 : -> / (GitCode#14@kiki1373639299) ([ac2e16c](https://github.com/continew-org/continew-admin/commit/ac2e16c472f19106c99e27e01a62ee067c1db3d0))
- 移除 QueryIgnore 注解，自行处理所有 Query 参数 ([541e53e](https://github.com/continew-org/continew-admin/commit/541e53ea26c9f0e67e1a2b7441e21356328d7a57))
- 适配 cs 树型结构字典配置命名调整 DICT_TREE -> TREE_DICT ([541e53e](https://github.com/continew-org/continew-admin/commit/541e53ea26c9f0e67e1a2b7441e21356328d7a57))
- 适配 cs security-crypto 模块拆分及包名调整，重新引入密码编码器模块 ([541e53e](https://github.com/continew-org/continew-admin/commit/541e53ea26c9f0e67e1a2b7441e21356328d7a57))
- 优化接口默认失败、成功提示 ([9b5eab6](https://github.com/continew-org/continew-admin/commit/9b5eab6a3426acc769ae54da71ed000a96d7b655))
- 任务调度模块未启用时，增加默认提示 ([68a1227](https://github.com/continew-org/continew-admin/commit/68a1227945170e1a662ead9f6d3597163a52e41a))
- 重构打包配置以同时支持胖包和瘦包模式 (Gitee#73@dom-w) ([6be14b5](https://github.com/continew-org/continew-admin/commit/6be14b59b1e93b2b08a63ec18558eebee73a1bf2))
- 修正 pgsql 数据脚本错误 ([95c1776](https://github.com/continew-org/continew-admin/commit/95c1776606352528f899df60b2c1b4ec7a9079eb))
- 【前端】优化操作日志json预览效果 ([eea9a93](https://github.com/continew-org/continew-admin-ui/commit/eea9a93ae681af42a1338d44d6f5192ba9097639))
- 【前端】优化 useDownload 函数，如果指定了文件名则直接使用 ([986c03e](https://github.com/continew-org/continew-admin-ui/commit/986c03e69fb8f21c7de84532d433e7c7ba5f6735))
- 【前端】简化命名，例如：UserAddDrawer => AddDrawer ([c57a0a2](https://github.com/continew-org/continew-admin-ui/commit/c57a0a21951b32e6a7ff889fb4da89344aa0eb0b))
- 【前端】统一表格操作按钮最大数量为 3，超过 2 个则显示更多 ([eddd7c5](https://github.com/continew-org/continew-admin-ui/commit/eddd7c5fc6943e918ab3cfd19e0da4e528b43ff3))
- 【前端】v-model.trim => v-model（外国用户输入单词无法直接在首尾输入空格） ([4aeb795](https://github.com/continew-org/continew-admin-ui/commit/4aeb795db03c276463d9fa6dd5fdc34091d99de0))
- 【前端】修改存储配置时，保持Secret Key为空将不更改 ([f0b24cc](https://github.com/continew-org/continew-admin-ui/commit/f0b24cc18afc8ee0cef185a385270b098cdd0b4f))
- 【前端】移除登录页h5时第三方登录对租户开启的判断 (GitCode#10@kiki1373639299) ([619ee77](https://github.com/continew-org/continew-admin-ui/commit/619ee77fb4a756ddef40fe276a988110742a8c0a))

### 🐛 问题修复

- 系统内置用户禁止修改角色 (GitCode#8@lishuyanla) ([93d8168](https://github.com/continew-org/continew-admin/commit/93d8168e9f55ecb9691eeb9ce899503f0140020a))
- 修复代码生成前端 API 模板错误 ([7f05453](https://github.com/continew-org/continew-admin/commit/7f05453d8c9b29427b3f19a20a452228889522f1))
- 修复上传文件不指定 parentPath 默认上级目录不自动创建的问题 ([7ad12ef](https://github.com/continew-org/continew-admin/commit/7ad12effae8d547d63e86ad64f5a9cd89aba1221))
- 修复缓存 CRUD API 权限前缀偶发性缺失元素的问题 ([df6e294](https://github.com/continew-org/continew-admin/commit/df6e294cbd10fb0b30354d972356b1a7440682f9))
- 修复个人中心角色信息展示错误 ([fac8922](https://github.com/continew-org/continew-admin/commit/fac89229335bf4e7c9aa54ec38951d1abc6a45b1))
- 对象存储配置增加 Endpoint 参数格式校验 ([f2258d8](https://github.com/continew-org/continew-admin/commit/f2258d821b37c72d792873320a618730c680c875))
- 修复创建上级文件夹的并发问题 (GitCode#12@kiki1373639299) ([1b065b1](https://github.com/continew-org/continew-admin/commit/1b065b1755e4f40e27c6726028cc312116232d06))
- 修复新建租户的管理员用户角色回显错误 (Gitee#72@hiteam) ([fa77fc5](https://gitee.com/continew/continew-admin/commit/fa77fc50eea4ae31722f16c583ec8f9a51ad632d)) ([5e6290f](https://gitee.com/continew/continew-admin/commit/5e6290f5c52d8dcaf517ee8be6ec5f645383e983))
- 修复查询密码过期时间配置，未使用线程池的问题 ([8bcf27c](https://gitee.com/continew/continew-admin/commit/8bcf27c48e43a138d4b3159c0b9e563fa9011f0a))
- 修复系统用户导入提示【存在无效部门】且新增支持多级部门导入 (GitCode#13@kiki1373639299) ([a39f644](https://github.com/continew-org/continew-admin/commit/a39f6446d7954cea78d61d9f7254096c5296631e))
- 修复邮箱发送错误 ([541e53e](https://github.com/continew-org/continew-admin/commit/541e53ea26c9f0e67e1a2b7441e21356328d7a57))
- 修复多租户下开启多数据源拦截器返回结果异常的情况 ([541e53e](https://github.com/continew-org/continew-admin/commit/541e53ea26c9f0e67e1a2b7441e21356328d7a57))
- 修复查看消息详情报错的问题 ([9bfde6f](https://github.com/continew-org/continew-admin/commit/9bfde6f6a312ba08a5931cdb5e61c35cfbede5d6))
- 修复查询用户未读消息错误 ([37539ae](https://github.com/continew-org/continew-admin/commit/37539ae8a8f240d961ed78fe80b90dc544e85087))
- 修复第三方登录用户默认部门配置错误 (GitCode#15@kiki1373639299) ([5e7a2a4](https://github.com/continew-org/continew-admin/commit/5e7a2a4a7458ddffb065edab5e2e1ac0fb4a4f9e))
- 修复我的公告查询到待发布公告的问题 ([8790ecf](https://github.com/continew-org/continew-admin/commit/8790ecfb1e2d71747b31cef97617025e372798f1))
- 兼容未开启 SSL 的高版本 pgsql (Gitee#74@aiwendil) ([9aa4b2c](https://gitee.com/continew/continew-admin/commit/9aa4b2cfdda74b57082a10e0fe5a13c2f13af3c3)) ([66494fe](https://gitee.com/continew/continew-admin/commit/66494fe7d72601d4cede4be7ae6feec45501bd83))
- 【前端】系统内置用户，禁用分配角色功能 (GitCode#6@lishuyanla) ([1b1cbb8](https://github.com/continew-org/continew-admin-ui/commit/1b1cbb862789340ab580ef4a50126951be4bc491))
- 【前端】修复操作日志列表根据状态筛选不生效的问题 (GitHub#76@ali-pay) ([8ddc1ff](https://github.com/continew-org/continew-admin-ui/commit/8ddc1ff516caa1a784ab8fc56ab4db51eabbd88b))
- 【前端】修复个人中心角色信息展示错误 ([b1805dc](https://github.com/continew-org/continew-admin-ui/commit/b1805dc41beca98012c8bc292fbd67659dfaa91c))
- 【前端】补充UserInfo定义的新增字段 (GitCode#9@maqiang9527) ([d85ac20](https://github.com/continew-org/continew-admin-ui/commit/d85ac20d7e642c0fa43051010a7f62f09871ed3a))
- 【前端】修复腾讯云短信配置缺失问题，配置腾讯云短信，需要增加输入 sdkAppId 配置项 ([6477a6d](https://github.com/continew-org/continew-admin-ui/commit/6477a6de3e5d8a332ef020f4b2958702d494b958))
- 【前端】修复混合布局模式下详情页左侧菜单消失问题 (GitCode#12@kiki1373639299) ([069175b](https://github.com/continew-org/continew-admin-ui/commit/069175bf1648bc42371bbae58d56c9245ad8bbe0))
- 【前端】修复重命名文件夹后，文件管理目录导航显示错误 (GitHub#78@ppxb) ([26e3738](https://github.com/continew-org/continew-admin-ui/commit/26e3738b74fe22f31ff2d8c0c0863e9c10b5e1ce))

### 📦 依赖升级

- continew-starter 2.13.4 => 2.14.0 ([541e53e](https://github.com/continew-org/continew-admin/commit/541e53ea26c9f0e67e1a2b7441e21356328d7a57))

## [v4.0.0](https://github.com/continew-org/continew-admin/compare/v3.7.0...v4.0.0) (2025-07-27)

### ✨ 新特性

- 新增多租户插件模块 (GitHub#175@xtanyu) ([ed6dd65](https://github.com/continew-org/continew-admin/commit/ed6dd65a51a1c26af2c9d76407463b7f67c71fd5)) ([dec5d61](https://github.com/continew-org/continew-admin/commit/dec5d611bef76bbd145d076f62fe5b8deced75ae)) ([af1079d](https://github.com/continew-org/continew-admin/commit/af1079da6d009fa9cdeb7c1caf7a131a0449229f)) ([6e7d371](https://github.com/continew-org/continew-admin/commit/6e7d371565e75272f027a547442adf3071dbe152)) ([7e9a950](https://github.com/continew-org/continew-admin/commit/7e9a950694ce78f11b0f2ffb8fe69617502c361e)) ([9eff846](https://github.com/continew-org/continew-admin/commit/9eff8467119d20aa7bd710d78f89fd194edd4a9f)) ([84b2c39](https://github.com/continew-org/continew-admin/commit/84b2c39a303a3423f4114c7bb59fe1de62414cab)) ([e6edb57](https://github.com/continew-org/continew-admin/commit/e6edb57a8cf991be9408df2dfaf50271d3e0b638)) ([819be06](https://github.com/continew-org/continew-admin/commit/819be0688d3138fbbe02f02a09e481852625819d)) ([19bbbd9](https://github.com/continew-org/continew-admin/commit/19bbbd93ad9e06ad6037c1eef4d7171d4e107733)) ([382c87f](https://github.com/continew-org/continew-admin/commit/382c87f8bd5cf9549617ca78c170b2638a37c486)) ([b8c44c9](https://github.com/continew-org/continew-admin/commit/b8c44c9fe286cdb911806687387cf4c21dd4f55b)) ([ada6f3e](https://github.com/continew-org/continew-admin/commit/ada6f3ef5c8f17028a360765295fe8ab8a31406a)) ([f350ee1](https://github.com/continew-org/continew-admin/commit/f350ee1567ba192b1ea2912d7ae401322b51413e))
- 新增 database-id 配置项，适配多数据库SQL语法差异，提升MyBatis XML兼容性 (GitCode#5@onekr-billy) ([151a0fa](https://github.com/continew-org/continew-admin/commit/151a0faeb0578e98e5d72f67f83623cc846a3172)) ([7ff5166](https://github.com/continew-org/continew-admin/commit/7ff516694ee5b9ccc260ed5940538900149a7552))
- 重构 CRUD API 权限控制，新增 CrudApiPermissionPrefixCache 缓存权限前缀 ([83514b9](https://github.com/continew-org/continew-admin/commit/83514b92518ee412398490b4a71f9657ba79266b))
- SecureUtils 新增 decryptPasswordByRsaPrivateKey 方法统一处理密码解密 ([1ec154f](https://github.com/continew-org/continew-admin/commit/1ec154f0116020d9282bab922762e820e467c2e1))
- 新增查询角色权限树列表接口（替换角色分配权限的菜单树列表接口） ([950942a](https://github.com/continew-org/continew-admin/commit/950942a742f991e524218eef2c09da0c2486fd65))
- 【前端】新增多租户模块 (GitHub#75@xtanyu) ([e662565](https://github.com/continew-org/continew-admin-ui/commit/e66256581e5826e03aaad5170cb7de10f5ceabf7)) ([c7a1c1d](https://github.com/continew-org/continew-admin-ui/commit/c7a1c1deba13baa0718aba4f6f3eca7c0cd3e3de)) ([2c60203](https://github.com/continew-org/continew-admin-ui/commit/2c602033bdabbaafc75bcc37a40f809b61469881)) ([6a96eee](https://github.com/continew-org/continew-admin-ui/commit/6a96eee9e965871ded7063fab60d52921865a4b4)) ([112c27e](https://github.com/continew-org/continew-admin-ui/commit/112c27e49c2310910fa97f6b3f000e090fda73d7)) ([87bcf33](https://github.com/continew-org/continew-admin-ui/commit/87bcf33940dc37a9d8a62e0d0bf316e26cee01e8)) ([d4397ff](https://github.com/continew-org/continew-admin-ui/commit/d4397ffd570635c72eb1e214f9aaa9d8256f9dfc)) ([e63bedc](https://github.com/continew-org/continew-admin-ui/commit/e63bedc11b9ea6f59a8afe4284135b42a4dc65e2)) ([3e49bce](https://github.com/continew-org/continew-admin-ui/commit/3e49bce38e1b8d4ae2e181079e07c175b911fea7)) ([a72d122](https://github.com/continew-org/continew-admin-ui/commit/a72d12227ece9882eb5b0f8ccc378eae814fbeac)) ([0c594c1](https://github.com/continew-org/continew-admin-ui/commit/0c594c167e3b57911f09b2c7f43bb7873d462a4e))
- 【前端】优化登录后的页面重定向逻辑 ([aaefb7f](https://github.com/continew-org/continew-admin-ui/commit/aaefb7f8e4b45c120dc3da2dc8f8671c058409b3))
- 【前端】菜单列表增加路由地址和权限标识搜索功能 (GitCode#5@onekr-billy) ([900a2af](https://github.com/continew-org/continew-admin-ui/commit/900a2afdb7b369a14c914dcbb08ed48f094af1e9))
- 【前端】新增查询角色权限树列表接口（替换角色分配权限的菜单树列表接口） ([87e6dea](https://github.com/continew-org/continew-admin-ui/commit/87e6deab4d5f96146e6bfdd4a4b1704be321f813))

### 💎 功能优化

- 优化模块命名 continew-webapi => continew-server，continew-module-system => continew-system ([71fee0f](https://github.com/continew-org/continew-admin/commit/71fee0f58d01266469c1307284464fde737e5f58))
- 拆分接口文档分组配置及 controller 到各自模块 ([93bd70d](https://github.com/continew-org/continew-admin/commit/93bd70dc5ce0b64dc90b04bda9547f28114da8be))
- 使用 Snail Job Open API(SDK API) 替换修改状态接口 ([31cdf86](https://github.com/continew-org/continew-admin/commit/31cdf86eb643767339fbc8aae99104984038cb23))
- 优化角色和用户相关查询数据填充 ([b7a5a41](https://github.com/continew-org/continew-admin/commit/b7a5a41eac09c3a04969ab551aba10278ea2fe6b))
- 为枚举类型的字段添加自定义 Excel 转换器 ([930b1d4](https://github.com/continew-org/continew-admin/commit/930b1d461ba83caa7e9c0fc9ce796b0d4fcf9ca3))
- 为 Mapper 接口增加 Mapper 注解，以消除 IDEA 警告标志（减少小白咨询） ([efb65c2](https://github.com/continew-org/continew-admin/commit/efb65c21a15f8493318ef6a7bc37093b85e3bc39))
- 使用 SpEL Validator 优化部分校验场景 ([0d3c1bb](https://github.com/continew-org/continew-admin/commit/0d3c1bb2b125d9886fae069d29ac91c118ecd8ff))
- 优化行为验证码 CaptchaService 服务获取方式，关闭行为验证码不会导致启动报错 ([dcc28bc](https://github.com/continew-org/continew-admin/commit/dcc28bcf34c8d69f53b9924bf93563bcd172e270))
- CommonController 迁移至 system 模块、OnlineUserController 迁移至 system/auth 模块 ([08f45b5](https://github.com/continew-org/continew-admin/commit/08f45b5f4da37c1d17f98f704c684a2438239486))
- 使用 CollUtils 替代部分 Stream 操作，提高代码的可读性，减少代码行数（缺点：方法写起来不如流式代码舒爽） ([33d8943](https://github.com/continew-org/continew-admin/commit/33d89431cf18a01fc3d09ae0d2de8e1c3745e254))
- 重构系统模块的唯一性校验逻辑 ([c813f2e](https://github.com/continew-org/continew-admin/commit/c813f2ebbdac8edad2f101d29e2c873fc9225409))
- 添加 SQL 解析本地缓存 ([aadf879](https://github.com/continew-org/continew-admin/commit/aadf879be07d28f1afb584b1a337409f5e88fc62))
- 增加测试用户数据 ([5fded43](https://github.com/continew-org/continew-admin/commit/5fded43b7a4fee7c10732e268f4dfc9c66ddfb4c))
- 优化 Lombok 配置，全局禁用 Log4j、Log4j2 注解，请使用 Slf4j ([24f233e](https://github.com/continew-org/continew-admin/commit/24f233e2b5584eae8e7840a994c1241017a8c33d))
- CRUD Api 忽略排除（放行）路径的权限校验 ([3af43ef](https://github.com/continew-org/continew-admin/commit/3af43ef6c7fa3f4f2d4d390d47fae9c5f518e60d))
- 重构内部 API 依赖模式（降低耦合，公众号投票结论），在 common 模块新增 api 包，在对应 biz 模块增加实现 ([7f00599](https://github.com/continew-org/continew-admin/commit/7f0059984deae80a109a457f41ef8732d52228ff))
- 梳理用户和角色体系，内置角色：超级管理员、租户管理员（系统管理员），且内置用户和角色不允许变更及分配 ([93bf749](https://github.com/continew-org/continew-admin/commit/93bf749ce3f140e9bb6fc5a825210ad42971388c))
- 重构用户邮箱和手机号唯一性校验逻辑 (Gitee#71@lishuyanla) ([b42902e](https://github.com/continew-org/continew-admin/commit/b42902e1b974f3339a197a8ff4c2d23c08d884e4))
- 优化创建用户代码 ([54ba099](https://github.com/continew-org/continew-admin/commit/54ba0999e4fcc1a90c2ff366790fa93decb421a0))
- 暂时下线查询日志详情功能（Snail Job 日志详情 API 变更为 WebSocket 模式） ([600f447](https://github.com/continew-org/continew-admin/commit/600f4477c8d3dafdaa6da41940a7b89dad9a9484))
- 【前端】统一加载图标 ([bb3c082](https://github.com/continew-org/continew-admin-ui/commit/bb3c082146805c664bb8a8d6ffadea9983f942f2))
- 【前端】优化通知公告相关页面的回退逻辑 ([633f9aa](https://github.com/continew-org/continew-admin-ui/commit/633f9aaa4a27dab2ffa9f580edfb807e6987c75f))
- 【前端】优化角色权限代码 ([8090861](https://github.com/continew-org/continew-admin-ui/commit/8090861bc6cc8951268e8e758b798f1a9463376f))
- 【前端】将 common 目录下的 common.ts 文件移动到 system 目录下 ([60c6df2](https://github.com/continew-org/continew-admin-ui/commit/60c6df25747f348201d41d054812f0d935000752))
- 【前端】更新短信配置和日志接口的 URL ([53aeebe](https://github.com/continew-org/continew-admin-ui/commit/53aeebeb4dd534bec2ad3cfcb09317cc6d8aad44))
- 【前端】适配后端部分字典接口变化 ([d7937e7](https://github.com/continew-org/continew-admin-ui/commit/d7937e79054f2b7fd2c32fb2b47f7a27b14b1229))
- 【前端】优化用户表单和菜单列表页面 ([dca7379](https://github.com/continew-org/continew-admin-ui/commit/dca7379c201ae665044d2756aba2c48aba18eaac))
- 【前端】关于菜单增加更新日志内嵌菜单，移除在线文档外链菜单 ([f3dea88](https://github.com/continew-org/continew-admin-ui/commit/f3dea886adb6591dd7f8d81f835723d2a71c1e09))
- 【前端】暂时下线查询日志详情功能（Snail Job 日志详情 API 变更为 WebSocket 模式） ([5050126](https://github.com/continew-org/continew-admin-ui/commit/5050126892b8488011aeaf45c37ed99ad22a8a27))

### 🐛 问题修复

- 修复全部已读无效 ([271e2d8](https://github.com/continew-org/continew-admin/commit/271e2d8681e213dca0acb4573e11d9949101796c))
- 修复查询未读公告和消息数据错误 ([13c18f1](https://github.com/continew-org/continew-admin/commit/13c18f1861e14d32dd791bfbc7864f5722e340e4))
- 补充 captcha 和 dashboard 接口的文档分组路径 (Gitee#65@dom-w) ([ca320c7](https://github.com/continew-org/continew-admin/commit/ca320c7a172a0fc78202a68c7a49f060e96d23f4))
- 代码生成详情页模板增加对字典字段的翻译处理 ([e0a7cfd](https://github.com/continew-org/continew-admin/commit/e0a7cfd44814384c3802b48f0dd0fbacc8867fe6))
- 修复对象存储域名配置 ([fcc3cb9](https://github.com/continew-org/continew-admin/commit/fcc3cb909ab03c17705b0f2d0b8a25eeb44898c8))
- 修复查询角色关联用户时，角色信息映射错误问题 ([b514c9e](https://github.com/continew-org/continew-admin/commit/b514c9eeba2639b6108432dd49aaedf350b39f85))
- 修复 SaToken 全局异常处理中的错误信息 ([d4df425](https://github.com/continew-org/continew-admin/commit/d4df4254fca36264a882d1d4de715dc4e288ec8d))
- 修复了在过滤无效 token 时，没有增加对StpUtil.getLoginIdByToken 返回 null情况处理，导致 执行 groupingBy 报错 (GitCode#3@onekr-billy) ([53fc674](https://github.com/continew-org/continew-admin/commit/53fc674f4adb8cdcf768b83e70d09d91d447bfe6))
- 修复数据权限重写 deleteById 方法导致 Parameter 'id' 未映射异常 (GitCode#7@QAQ_Z) ([4c14feb](https://github.com/continew-org/continew-admin/commit/4c14feb15f9d52be14345f0b10db64bed3d4a111))
- 将"代码生成"菜单项重命名为"开发工具"（显示一级菜单时出现的key重复问题） ([1076b4a](https://github.com/continew-org/continew-admin/commit/1076b4a19b7c86d7d51633895f2ebd45aafdb76e))
- 修复非管理员用户查询个人已读公告时出现重复数据的问题 ([72493f8](https://github.com/continew-org/continew-admin/commit/72493f8161582a0afe329f8d54de347aad76959b))
- SpelFuture => Future 以修复定时发布时间校验错误 ([317a937](https://github.com/continew-org/continew-admin/commit/317a9372dac89e512581061844097e104dc61e78))
- 修复菜单删除功能不支持级联删除子菜单的问题 ([15cd05b](https://github.com/continew-org/continew-admin/commit/15cd05bf77acb7c0110f6c071229195079d59e1c))
- 修复 PostgreSQL JDBC URL 配置及部分 SQL 语法错误 (GitHub#178@BruceMaa) ([d95bb15](https://github.com/continew-org/continew-admin/commit/d95bb15beba13476351820c8deba5a076c0ae5db))
- 【前端】修复用户角色列表单击行选中功能失效的问题 ([8b7ef16](https://github.com/continew-org/continew-admin-ui/commit/8b7ef16687d02d5671201418e0e122c0426b8176))
- 【前端】修复邮箱配置的启用SSL加密开关初始值错误的问题 (GitCode#4@ali_pay) ([ca304f3](https://github.com/continew-org/continew-admin-ui/commit/ca304f30dcb7cd70ec06477b33147d4c3a205d7a))
- 【前端】修复混合布局下的菜单过多不能滚动的问题 (GitHub#71@yingshi-7) ([4873418](https://github.com/continew-org/continew-admin-ui/commit/4873418561f746122d8bcee565b937c2d9b1e988))
- 【前端】code generator preview issue (GitHub#73@ppxb) ([fdfa0cd](https://github.com/continew-org/continew-admin-ui/commit/fdfa0cd2d5b9b586fb3ca4838647a8e68c9865c5))
- 【前端】调整水印 z-index，以修复表格全屏或表单弹出时水印无法覆盖的问题 ([afd1bb7](https://github.com/continew-org/continew-admin-ui/commit/afd1bb7017b8a28b690eee842d69ae1bc35037b2)) ([4cf763e](https://github.com/continew-org/continew-admin-ui/commit/4cf763e8174601c629a09403272621c69ff4b179))
- 【前端】弹窗报错信息和主题模式的按钮存在显示问题 ([41f458d](https://github.com/continew-org/continew-admin-ui/commit/41f458d2b0fbc9bc155fd7af8cbe52a7fdf19323))
- 【前端】修复修改部门时上级部门选择的问题 (Gitee#61@lishuyanla) ([47e2dfa](https://github.com/continew-org/continew-admin-ui/commit/47e2dfaff030e181f1a2626218f20efd5f7025cc))
- 【前端】修复字典项权限标识不一致的问题 (GitCode#5@onekr-billy) ([3ea79ec](https://github.com/continew-org/continew-admin-ui/commit/3ea79ec7e08e70144970d9761d86e564a3f0e806))
- 【前端】系统内置角色不允许修改权限 ([4b0aea5](https://github.com/continew-org/continew-admin-ui/commit/4b0aea536c20afd4733c811bd9d8e34cde199ce3))

### 📦 依赖升级

- continew-starter 2.12.2 => 2.13.0 ([2138bee](https://github.com/continew-org/continew-admin/commit/2138bee42c7105363f4413a847d4e6e4daca48d1))
- continew-starter 2.13.0 => 2.13.1 ([6136797](https://github.com/continew-org/continew-admin/commit/61367975887ffa7c673f5a656e69be151432f60d))
- continew-starter 2.13.1 => 2.13.2-SNAPSHOT ([2f445d9](https://github.com/continew-org/continew-admin/commit/2f445d9150ed98ed0dbc150a930ee8f4ddecefa8))
- continew-starter 2.13.2-SNAPSHOT => 2.13.2 ([bc44de4](https://github.com/continew-org/continew-admin/commit/bc44de4bdd96ee92d90b64974c62128c0a1edbd2))
- continew-starter 2.13.2 => 2.13.3 ([57b1868](https://github.com/continew-org/continew-admin/commit/57b186835d72f5410cf85a1324ad65e1ace3230c))
- continew-starter 2.13.3 => 2.13.4 ([e6169bd](https://github.com/continew-org/continew-admin/commit/e6169bdb6c2d6c41986e81e2df12ceaf472aaf7d))
- 升级环境版本 mysql 8.0.33 => 8.0.42，redis 7.2.3 => 7.2.8，nginx 1.25.3 => 1.27.0 ([f1a87b4](https://github.com/continew-org/continew-admin/commit/f1a87b4c236a635b5a3330537b88c4ff002d0924))

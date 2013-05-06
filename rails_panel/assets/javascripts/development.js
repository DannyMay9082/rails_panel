function mockTransactions1() {
  return [
{"name":"start_processing.action_controller","payload":{"controller":"DemosController","action":"auto_html","params":{"controller":"demos","action":"auto_html"},"format":"html","method":"GET","path":"/demos/auto_html"},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":0.004},
{"name":"sql.active_record","payload":{"sql":"SHOW FULL FIELDS FROM `demos`","name":"SCHEMA","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":1.8639999999999999},
{"name":"sql.active_record","payload":{"sql":"SHOW TABLES LIKE 'demos'","name":"SCHEMA","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":15.9},
{"name":"sql.active_record","payload":{"sql":"SHOW CREATE TABLE `demos`","name":"SCHEMA","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":0.245},
{"name":"sql.active_record","payload":{"sql":"SELECT  `demos`.* FROM `demos`  WHERE `demos`.`title` = 'auto_html demo' LIMIT 1","name":"Demo Load","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":0.296},
{"name":"sql.active_record","payload":{"sql":"SHOW FULL FIELDS FROM `comments`","name":"SCHEMA","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":1.9120000000000001},
{"name":"sql.active_record","payload":{"sql":"SHOW TABLES LIKE 'comments'","name":"SCHEMA","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":0.242},
{"name":"sql.active_record","payload":{"sql":"SHOW CREATE TABLE `comments`","name":"SCHEMA","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":0.16699999999999998},
{"name":"sql.active_record","payload":{"sql":"SELECT `comments`.* FROM `comments`  WHERE `comments`.`commentable_id` = 1 AND `comments`.`commentable_type` = 'Demo'","name":"Comment Load","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":0.318},
{"name":"sql.active_record","payload":{"sql":"SHOW TABLES LIKE 'users'","name":"SCHEMA","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":15.093},
{"name":"sql.active_record","payload":{"sql":"SHOW CREATE TABLE `users`","name":"SCHEMA","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":0.29500000000000004},
{"name":"sql.active_record","payload":{"sql":"SHOW FULL FIELDS FROM `users`","name":"SCHEMA","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":1.7550000000000001},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","name":"User Load","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":0.223},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":64.75699999999999},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","binds":[],"name":"CACHE","connection_id":70276910374180},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":0.002},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":2.283},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","binds":[],"name":"CACHE","connection_id":70276910374180},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":0.002},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":1.641},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","binds":[],"name":"CACHE","connection_id":70276910374180},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":0.002},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":1.6219999999999999},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","binds":[],"name":"CACHE","connection_id":70276910374180},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":0.002},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":2.21},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","binds":[],"name":"CACHE","connection_id":70276910374180},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":0.002},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":1.711},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","binds":[],"name":"CACHE","connection_id":70276910374180},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":0.002},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":2.041},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","binds":[],"name":"CACHE","connection_id":70276910374180},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":0.002},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":2.2880000000000003},
{"name":"render_collection.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/comments/_comment.html.haml","count":8},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":82.204},
{"name":"!render_template.action_view","payload":{"virtual_path":"/comments/_form"},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":17.94},
{"name":"render_partial.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/comments/_form.html.haml"},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":18.351},
{"name":"!render_template.action_view","payload":{"virtual_path":"demos/auto_html"},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":176.83499999999998},
{"name":"render_template.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/demos/auto_html.html.haml","layout":"layouts/application"},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:48+01:00","duration":177.41199999999998},
{"name":"!render_template.action_view","payload":{"virtual_path":"/layouts/application/_nav"},"time":"2012-11-25T16:52:49+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:49+01:00","duration":5.457},
{"name":"render_partial.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/layouts/application/_nav.html.haml"},"time":"2012-11-25T16:52:49+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:49+01:00","duration":5.966},
{"name":"!render_template.action_view","payload":{"virtual_path":"layouts/application/_content"},"time":"2012-11-25T16:52:49+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:49+01:00","duration":1.95},
{"name":"render_partial.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/layouts/application/_content.html.haml"},"time":"2012-11-25T16:52:49+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:49+01:00","duration":2.506},
{"name":"!render_template.action_view","payload":{"virtual_path":"/layouts/application/_analytics"},"time":"2012-11-25T16:52:49+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:49+01:00","duration":0.416},
{"name":"render_partial.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/layouts/application/_analytics.html.erb"},"time":"2012-11-25T16:52:49+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:49+01:00","duration":1.224},
{"name":"!render_template.action_view","payload":{"virtual_path":"layouts/application"},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:49+01:00","duration":947.2270000000001},
{"name":"process_action.action_controller","payload":{"controller":"DemosController","action":"auto_html","params":{"controller":"demos","action":"auto_html"},"format":"html","method":"GET","path":"/demos/auto_html","status":200,"view_runtime":1112.7160000000001,"db_runtime":38.32399999999999},"time":"2012-11-25T16:52:48+01:00","transaction_id":"371131b57ce19c8bcc3d","end":"2012-11-25T16:52:49+01:00","duration":1198.751},
{"name":"start_processing.action_controller","payload":{"controller":"DemosController","action":"auto_html","params":{"controller":"demos","action":"auto_html"},"format":"html","method":"GET","path":"/demos/auto_html"},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":0.003}
  ];
}

function mockTransactions2() {
  return [
{"name":"sql.active_record","payload":{"sql":"SELECT  `demos`.* FROM `demos`  WHERE `demos`.`title` = 'auto_html demo' LIMIT 1","name":"Demo Load","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":0.29300000000000004},
{"name":"sql.active_record","payload":{"sql":"SELECT `comments`.* FROM `comments`  WHERE `comments`.`commentable_id` = 1 AND `comments`.`commentable_type` = 'Demo'","name":"Comment Load","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":0.355},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","name":"User Load","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":0.347},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":3.0370000000000004},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","binds":[],"name":"CACHE","connection_id":70276910374180},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":0.002},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":1.768},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","binds":[],"name":"CACHE","connection_id":70276910374180},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":0.002},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":1.709},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","binds":[],"name":"CACHE","connection_id":70276910374180},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":0.002},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":1.7249999999999999},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","binds":[],"name":"CACHE","connection_id":70276910374180},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":0.001},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":2.353},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","binds":[],"name":"CACHE","connection_id":70276910374180},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":0.002},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":1.787},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","binds":[],"name":"CACHE","connection_id":70276910374180},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":0.002},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":2.236},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","binds":[],"name":"CACHE","connection_id":70276910374180},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":0.002},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":1.976},
{"name":"render_collection.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/comments/_comment.html.haml","count":8},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":19.729},
{"name":"!render_template.action_view","payload":{"virtual_path":"/comments/_form"},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":0.869},
{"name":"render_partial.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/comments/_form.html.haml"},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":1.456},
{"name":"!render_template.action_view","payload":{"virtual_path":"demos/auto_html"},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":29.875},
{"name":"render_template.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/demos/auto_html.html.haml","layout":"layouts/application"},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":30.401},
{"name":"!render_template.action_view","payload":{"virtual_path":"/layouts/application/_nav"},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":33.086},
{"name":"render_partial.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/layouts/application/_nav.html.haml"},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":33.495},
{"name":"!render_template.action_view","payload":{"virtual_path":"layouts/application/_content"},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":0.248},
{"name":"render_partial.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/layouts/application/_content.html.haml"},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":0.653},
{"name":"!render_template.action_view","payload":{"virtual_path":"/layouts/application/_analytics"},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":0.030000000000000002},
{"name":"render_partial.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/layouts/application/_analytics.html.erb"},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":0.393},
{"name":"!render_template.action_view","payload":{"virtual_path":"layouts/application"},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":90.732},
{"name":"process_action.action_controller","payload":{"controller":"DemosController","action":"auto_html","params":{"controller":"demos","action":"auto_html"},"format":"html","method":"GET","path":"/demos/auto_html","status":200,"view_runtime":123.194,"db_runtime":1.008},"time":"2012-11-25T16:53:07+01:00","transaction_id":"471131b57ce19c8bcc3d","end":"2012-11-25T16:53:07+01:00","duration":125.92200000000001},
  ];
}

function mockTransactions3() {
  return [
{"name":"start_processing.action_controller","payload":{"controller":"DemosController","action":"auto_html","params":{"_pjax":"[data-pjax-container]","controller":"demos","action":"auto_html"},"format":"html","method":"GET","path":"/demos/auto_html?_pjax=%5Bdata-pjax-container%5D"},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":0.005},
{"name":"sql.active_record","payload":{"sql":"SELECT  `demos`.* FROM `demos`  WHERE `demos`.`title` = 'auto_html demo' LIMIT 1","name":"Demo Load","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":0.314},
{"name":"sql.active_record","payload":{"sql":"SELECT `comments`.* FROM `comments`  WHERE `comments`.`commentable_id` = 1 AND `comments`.`commentable_type` = 'Demo'","name":"Comment Load","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":0.38699999999999996},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","name":"User Load","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":0.261},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":3.126},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","binds":[],"name":"CACHE","connection_id":70276910374180},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":0.003},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":2.4139999999999997},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","binds":[],"name":"CACHE","connection_id":70276910374180},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":0.002},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":2.4},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","binds":[],"name":"CACHE","connection_id":70276910374180},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":0.001},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":2.2399999999999998},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","binds":[],"name":"CACHE","connection_id":70276910374180},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":0.002},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":2.162},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","binds":[],"name":"CACHE","connection_id":70276910374180},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":0.002},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":2.29},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","binds":[],"name":"CACHE","connection_id":70276910374180},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":0.002},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":2.76},
{"name":"sql.active_record","payload":{"sql":"SELECT  `users`.* FROM `users`  WHERE `users`.`id` = 1 LIMIT 1","binds":[],"name":"CACHE","connection_id":70276910374180},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":0.001},
{"name":"!render_template.action_view","payload":{"virtual_path":"comments/_comment"},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":2.679},
{"name":"render_collection.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/comments/_comment.html.haml","count":8},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":24.525000000000002},
{"name":"!render_template.action_view","payload":{"virtual_path":"/comments/_form"},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":0.919},
{"name":"render_partial.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/comments/_form.html.haml"},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":1.514},
{"name":"!render_template.action_view","payload":{"virtual_path":"demos/auto_html"},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":35.291000000000004},
{"name":"render_template.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/demos/auto_html.html.haml","layout":"layouts/application"},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":35.886},
{"name":"!render_template.action_view","payload":{"virtual_path":"/layouts/application/_nav"},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":1.478},
{"name":"render_partial.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/layouts/application/_nav.html.haml"},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":1.957},
{"name":"!render_template.action_view","payload":{"virtual_path":"layouts/application/_content"},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":0.264},
{"name":"render_partial.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/layouts/application/_content.html.haml"},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":0.6970000000000001},
{"name":"!render_template.action_view","payload":{"virtual_path":"/layouts/application/_analytics"},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":0.030000000000000002},
{"name":"render_partial.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/layouts/application/_analytics.html.erb"},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":0.501},
{"name":"!render_template.action_view","payload":{"virtual_path":"layouts/application"},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":64.547},
{"name":"process_action.action_controller","payload":{"controller":"DemosController","action":"auto_html","params":{"_pjax":"[data-pjax-container]","controller":"demos","action":"auto_html"},"format":"html","method":"GET","path":"/demos/auto_html?_pjax=%5Bdata-pjax-container%5D","status":200,"view_runtime":102.831,"db_runtime":0.9749999999999999},"time":"2012-11-25T16:53:08+01:00","transaction_id":"571131b57ce19c8bcc3d","end":"2012-11-25T16:53:08+01:00","duration":106.041},
  ];
}

function mockTransactions4() {
  return [
{"name":"start_processing.action_controller","payload":{"controller":"AboutController","action":"show","params":{"_pjax":"[data-pjax-container]","controller":"about","action":"show"},"format":"html","method":"GET","path":"/about?_pjax=%5Bdata-pjax-container%5D"},"time":"2012-11-25T16:53:10+01:00","transaction_id":"671131b57ce19c8bcc3d","end":"2012-11-25T16:53:10+01:00","duration":0.004},
{"name":"!render_template.action_view","payload":{"virtual_path":"about/show"},"time":"2012-11-25T16:53:10+01:00","transaction_id":"671131b57ce19c8bcc3d","end":"2012-11-25T16:53:10+01:00","duration":6.587},
{"name":"render_template.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/about/show.html.haml","layout":"layouts/application"},"time":"2012-11-25T16:53:10+01:00","transaction_id":"671131b57ce19c8bcc3d","end":"2012-11-25T16:53:10+01:00","duration":7.129},
{"name":"!render_template.action_view","payload":{"virtual_path":"/layouts/application/_nav"},"time":"2012-11-25T16:53:10+01:00","transaction_id":"671131b57ce19c8bcc3d","end":"2012-11-25T16:53:10+01:00","duration":1.3259999999999998},
{"name":"render_partial.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/layouts/application/_nav.html.haml"},"time":"2012-11-25T16:53:10+01:00","transaction_id":"671131b57ce19c8bcc3d","end":"2012-11-25T16:53:10+01:00","duration":1.772},
{"name":"!render_template.action_view","payload":{"virtual_path":"layouts/application/_content"},"time":"2012-11-25T16:53:10+01:00","transaction_id":"671131b57ce19c8bcc3d","end":"2012-11-25T16:53:10+01:00","duration":0.254},
{"name":"render_partial.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/layouts/application/_content.html.haml"},"time":"2012-11-25T16:53:10+01:00","transaction_id":"671131b57ce19c8bcc3d","end":"2012-11-25T16:53:10+01:00","duration":0.631},
{"name":"!render_template.action_view","payload":{"virtual_path":"/layouts/application/_analytics"},"time":"2012-11-25T16:53:10+01:00","transaction_id":"671131b57ce19c8bcc3d","end":"2012-11-25T16:53:10+01:00","duration":0.033},
{"name":"render_partial.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/layouts/application/_analytics.html.erb"},"time":"2012-11-25T16:53:10+01:00","transaction_id":"671131b57ce19c8bcc3d","end":"2012-11-25T16:53:10+01:00","duration":0.45899999999999996},
{"name":"!render_template.action_view","payload":{"virtual_path":"layouts/application"},"time":"2012-11-25T16:53:10+01:00","transaction_id":"671131b57ce19c8bcc3d","end":"2012-11-25T16:53:10+01:00","duration":59.052},
{"name":"process_action.action_controller","payload":{"controller":"AboutController","action":"show","params":{"_pjax":"[data-pjax-container]","controller":"about","action":"show"},"format":"html","method":"GET","path":"/about?_pjax=%5Bdata-pjax-container%5D","status":200,"view_runtime":129.25900000000001},"time":"2012-11-25T16:53:10+01:00","transaction_id":"671131b57ce19c8bcc3d","end":"2012-11-25T16:53:10+01:00","duration":130.408},
  ];
}

function mockTransactions5() {
  return [
{"name":"start_processing.action_controller","payload":{"controller":"ArticlesController","action":"index","params":{"_pjax":"[data-pjax-container]","controller":"articles","action":"index"},"format":"html","method":"GET","path":"/?_pjax=%5Bdata-pjax-container%5D"},"time":"2012-11-25T16:53:11+01:00","transaction_id":"871131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":0.004},
{"name":"sql.active_record","payload":{"sql":"SHOW FULL FIELDS FROM `articles`","name":"SCHEMA","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:53:11+01:00","transaction_id":"871131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":1.685},
{"name":"sql.active_record","payload":{"sql":"SHOW TABLES LIKE 'articles'","name":"SCHEMA","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:53:11+01:00","transaction_id":"871131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":0.266},
{"name":"sql.active_record","payload":{"sql":"SHOW CREATE TABLE `articles`","name":"SCHEMA","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:53:11+01:00","transaction_id":"871131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":0.185},
{"name":"sql.active_record","payload":{"sql":"SELECT `articles`.* FROM `articles`  WHERE (published_on <= '2012-11-25') ORDER BY published_on desc","name":"Article Load","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:53:11+01:00","transaction_id":"871131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":0.34099999999999997},
{"name":"!render_template.action_view","payload":{"virtual_path":"articles/index"},"time":"2012-11-25T16:53:11+01:00","transaction_id":"871131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":207.07999999999998},
{"name":"render_template.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/articles/index.html.haml","layout":"layouts/application"},"time":"2012-11-25T16:53:11+01:00","transaction_id":"871131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":207.824},
{"name":"!render_template.action_view","payload":{"virtual_path":"/layouts/application/_nav"},"time":"2012-11-25T16:53:11+01:00","transaction_id":"871131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":1.3079999999999998},
{"name":"render_partial.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/layouts/application/_nav.html.haml"},"time":"2012-11-25T16:53:11+01:00","transaction_id":"871131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":1.699},
{"name":"!render_template.action_view","payload":{"virtual_path":"layouts/application/_content"},"time":"2012-11-25T16:53:11+01:00","transaction_id":"871131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":0.391},
{"name":"render_partial.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/layouts/application/_content.html.haml"},"time":"2012-11-25T16:53:11+01:00","transaction_id":"871131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":0.878},
{"name":"!render_template.action_view","payload":{"virtual_path":"/layouts/application/_analytics"},"time":"2012-11-25T16:53:11+01:00","transaction_id":"871131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":0.033},
{"name":"render_partial.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/layouts/application/_analytics.html.erb"},"time":"2012-11-25T16:53:11+01:00","transaction_id":"871131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":0.626},
{"name":"!render_template.action_view","payload":{"virtual_path":"layouts/application"},"time":"2012-11-25T16:53:11+01:00","transaction_id":"871131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":59.223},
{"name":"process_action.action_controller","payload":{"controller":"ArticlesController","action":"index","params":{"_pjax":"[data-pjax-container]","controller":"articles","action":"index"},"format":"html","method":"GET","path":"/?_pjax=%5Bdata-pjax-container%5D","status":200,"view_runtime":285.588,"db_runtime":2.4770000000000003},"time":"2012-11-25T16:53:11+01:00","transaction_id":"871131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":317.57},
  ];
}

function mockTransactions6() {
  return [
{"name":"start_processing.action_controller","payload":{"controller":"ArticlesController","action":"index","params":{"_pjax":"[data-pjax-container]","controller":"articles","action":"index"},"format":"html","method":"GET","path":"/?_pjax=%5Bdata-pjax-container%5D"},"time":"2012-11-25T16:53:11+01:00","transaction_id":"971131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":0.004},
{"name":"sql.active_record","payload":{"sql":"SELECT `articles`.* FROM `articles`  WHERE (published_on <= '2012-11-25') ORDER BY published_on desc","name":"Article Load","connection_id":70276910374180,"binds":[]},"time":"2012-11-25T16:53:11+01:00","transaction_id":"971131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":0.51},
{"name":"!render_template.action_view","payload":{"virtual_path":"articles/index"},"time":"2012-11-25T16:53:11+01:00","transaction_id":"971131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":9.891},
{"name":"render_template.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/articles/index.html.haml","layout":"layouts/application"},"time":"2012-11-25T16:53:11+01:00","transaction_id":"971131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":10.576},
{"name":"!render_template.action_view","payload":{"virtual_path":"/layouts/application/_nav"},"time":"2012-11-25T16:53:11+01:00","transaction_id":"971131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":1.2830000000000001},
{"name":"render_partial.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/layouts/application/_nav.html.haml"},"time":"2012-11-25T16:53:11+01:00","transaction_id":"971131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":1.7429999999999999},
{"name":"!render_template.action_view","payload":{"virtual_path":"layouts/application/_content"},"time":"2012-11-25T16:53:11+01:00","transaction_id":"971131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":0.39399999999999996},
{"name":"render_partial.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/layouts/application/_content.html.haml"},"time":"2012-11-25T16:53:11+01:00","transaction_id":"971131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":0.9600000000000001},
{"name":"meta_request.log","payload":{"message":"[32mOhai!", "level":"debug", "filename":"/Users/dejan/src/rors/app/controller/articles_controller.rb", "line":"17"},"time":"2012-11-25T16:53:11+01:00","transaction_id":"971131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":0.9600000000000001},
{"name":"!render_template.action_view","payload":{"virtual_path":"/layouts/application/_analytics"},"time":"2012-11-25T16:53:11+01:00","transaction_id":"971131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":0.034},
{"name":"render_partial.action_view","payload":{"identifier":"/Users/dejan/work/rors/app/views/layouts/application/_analytics.html.erb"},"time":"2012-11-25T16:53:11+01:00","transaction_id":"971131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":0.422},
{"name":"!render_template.action_view","payload":{"virtual_path":"layouts/application"},"time":"2012-11-25T16:53:11+01:00","transaction_id":"971131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":151.565},
{"name":"process_action.action_controller","payload":{"controller":"ArticlesController","action":"index","params":{"_pjax":"[data-pjax-container]","controller":"articles","action":"index"},"format":"html","method":"GET","path":"/?_pjax=%5Bdata-pjax-container%5D","status":200,"view_runtime":164.775,"db_runtime":0.51},"time":"2012-11-25T16:53:11+01:00","transaction_id":"971131b57ce19c8bcc3d","end":"2012-11-25T16:53:11+01:00","duration":166.03},
  ];
} 



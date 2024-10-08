/*! For license information please see 296.ea05fdd9.js.LICENSE.txt */
;(self.webpackChunk_zhifou_rspress_blog =
  self.webpackChunk_zhifou_rspress_blog || []).push([
  ['296'],
  {
    41216: function (e, n, s) {
      'use strict'
      s.r(n)
      var t = s('35250'),
        i = s('51325')
      function o(e) {
        let n = Object.assign(
          { h3: 'h3', a: 'a', pre: 'pre', code: 'code' },
          (0, i.useMDXComponents)(),
          e.components
        )
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)(n.h3, {
              id: '1-\u4F7F\u7528jumbo\u5B89\u88C5jumbo-install-redis',
              children: [
                (0, t.jsx)(n.a, {
                  className: 'header-anchor',
                  'aria-hidden': 'true',
                  href: '#1-\u4F7F\u7528jumbo\u5B89\u88C5jumbo-install-redis',
                  children: '#',
                }),
                '1. \u4F7F\u7528jumbo\u5B89\u88C5\uFF1Ajumbo install redis',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.h3, {
              id: '2-\u67E5\u770B\u5B89\u88C5\u7684\u6587\u4EF6\u4F4D\u7F6Ejumbo-list-files-redis',
              children: [
                (0, t.jsx)(n.a, {
                  className: 'header-anchor',
                  'aria-hidden': 'true',
                  href: '#2-\u67E5\u770B\u5B89\u88C5\u7684\u6587\u4EF6\u4F4D\u7F6Ejumbo-list-files-redis',
                  children: '#',
                }),
                '2. \u67E5\u770B\u5B89\u88C5\u7684\u6587\u4EF6\u4F4D\u7F6E\uFF1Ajumbo list-files redis',
              ],
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                meta: '',
                children:
                  '${JUMBO_ROOT}/\n${JUMBO_ROOT}/bin/\n${JUMBO_ROOT}/bin/redis-benchmark\n${JUMBO_ROOT}/bin/redis-check-aof\n${JUMBO_ROOT}/bin/redis-check-rdb\n${JUMBO_ROOT}/bin/redis-cli\n${JUMBO_ROOT}/bin/redis-sentinel\n${JUMBO_ROOT}/bin/redis-server\n${JUMBO_ROOT}/etc/\n${JUMBO_ROOT}/etc/redis.conf\n${JUMBO_ROOT}/etc/supervisor.d/\n${JUMBO_ROOT}/etc/supervisor.d/redis.ini\n${JUMBO_ROOT}/var/\n${JUMBO_ROOT}/var/lib/\n${JUMBO_ROOT}/var/lib/redis/\n${JUMBO_ROOT}/var/redis/\n',
              }),
            }),
            '\n',
            (0, t.jsxs)(n.h3, {
              id: '3-\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6homeworkjumboetcredisconf\u4E2D\u7684daemonize-yes\u901A\u8FC7\u8BE5\u914D\u7F6E\u9879\u4FEE\u6539\u4F7F\u7528yes\u542F\u7528\u5B88\u62A4\u8FDB\u7A0B',
              children: [
                (0, t.jsx)(n.a, {
                  className: 'header-anchor',
                  'aria-hidden': 'true',
                  href: '#3-\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6homeworkjumboetcredisconf\u4E2D\u7684daemonize-yes\u901A\u8FC7\u8BE5\u914D\u7F6E\u9879\u4FEE\u6539\u4F7F\u7528yes\u542F\u7528\u5B88\u62A4\u8FDB\u7A0B',
                  children: '#',
                }),
                '3. \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6/home/work/.jumbo/etc/redis.conf\u4E2D\u7684daemonize yes\uFF0C\u901A\u8FC7\u8BE5\u914D\u7F6E\u9879\u4FEE\u6539\uFF0C\u4F7F\u7528yes\u542F\u7528\u5B88\u62A4\u8FDB\u7A0B',
              ],
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                meta: '',
                children:
                  "# By default Redis does not run as a daemon. Use 'yes' if you need it.\n# Note that Redis will write a pid file in /var/run/redis.pid when daemonized.\n#Redis\u9ED8\u8BA4\u4E0D\u662F\u4EE5\u5B88\u62A4\u8FDB\u7A0B\u7684\u65B9\u5F0F\u8FD0\u884C\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BE5\u914D\u7F6E\u9879\u4FEE\u6539\uFF0C\u4F7F\u7528yes\u542F\u7528\u5B88\u62A4\u8FDB\u7A0B\uFF08\u5B88\u62A4\u8FDB\u7A0B\uFF08daemon\uFF09\u662F\u6307\u5728UNIX\u6216\u5176\u4ED6\u591A\u4EFB\u52A1\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u5728\u540E\u53F0\u6267\u884C\u7684\u7535\u8111\u7A0B\u5E8F\uFF0C\u5E76\u4E0D\u4F1A\u63A5\u53D7\u7535\u8111\u7528\u6237\u7684\u76F4\u63A5\u64CD\u63A7\u3002\uFF09\ndaemonize no\n",
              }),
            }),
            '\n',
            (0, t.jsxs)(n.h3, {
              id: '4-\u6267\u884Credis-serverhomeworkjumboetcredisconf\u542F\u52A8redis',
              children: [
                (0, t.jsx)(n.a, {
                  className: 'header-anchor',
                  'aria-hidden': 'true',
                  href: '#4-\u6267\u884Credis-serverhomeworkjumboetcredisconf\u542F\u52A8redis',
                  children: '#',
                }),
                '4. \u6267\u884C./redis-server\xa0/home/work/.jumbo/etc/redis.conf,\u542F\u52A8redis',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.h3, {
              id: '5-\u6267\u884Credis-cli--h-localhost--p-6379\u5BF9redis\u8FDB\u884C\u6D4B\u8BD5',
              children: [
                (0, t.jsx)(n.a, {
                  className: 'header-anchor',
                  'aria-hidden': 'true',
                  href: '#5-\u6267\u884Credis-cli--h-localhost--p-6379\u5BF9redis\u8FDB\u884C\u6D4B\u8BD5',
                  children: '#',
                }),
                '5. \u6267\u884C./redis-cli -h localhost -p 6379\u5BF9redis\u8FDB\u884C\u6D4B\u8BD5',
              ],
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                meta: '',
                children:
                  '[root@fifo bin]# redis-cli -h localhost -p 6379\nlocalhost:6379> set mykey 123\nOK\nlocalhost:6379> get mykey\n"123"\n',
              }),
            }),
            '\n',
            (0, t.jsxs)(n.h3, {
              id: '6-redis\u914D\u7F6E\u8BE6\u89E3',
              children: [
                (0, t.jsx)(n.a, {
                  className: 'header-anchor',
                  'aria-hidden': 'true',
                  href: '#6-redis\u914D\u7F6E\u8BE6\u89E3',
                  children: '#',
                }),
                '6. Redis\u914D\u7F6E\u8BE6\u89E3',
              ],
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                meta: '',
                children:
                  "# By default Redis does not run as a daemon. Use 'yes' if you need it.\n# Note that Redis will write a pid file in /var/run/redis.pid when daemonized.\n#Redis\u9ED8\u8BA4\u4E0D\u662F\u4EE5\u5B88\u62A4\u8FDB\u7A0B\u7684\u65B9\u5F0F\u8FD0\u884C\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BE5\u914D\u7F6E\u9879\u4FEE\u6539\uFF0C\u4F7F\u7528yes\u542F\u7528\u5B88\u62A4\u8FDB\u7A0B\uFF08\u5B88\u62A4\u8FDB\u7A0B\uFF08daemon\uFF09\u662F\u6307\u5728UNIX\u6216\u5176\u4ED6\u591A\u4EFB\u52A1\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u5728\u540E\u53F0\u6267\u884C\u7684\u7535\u8111\u7A0B\u5E8F\uFF0C\u5E76\u4E0D\u4F1A\u63A5\u53D7\u7535\u8111\u7528\u6237\u7684\u76F4\u63A5\u64CD\u63A7\u3002\uFF09\ndaemonize no\n\n# When running daemonized, Redis writes a pid file in /var/run/redis.pid by\n# default. You can specify a custom pid file location here.\n#\u5F53 Redis \u4EE5\u5B88\u62A4\u8FDB\u7A0B\u7684\u65B9\u5F0F\u8FD0\u884C\u7684\u65F6\u5019,Redis \u9ED8\u8BA4\u4F1A\u628A pid \u6587\u4EF6\u653E\u5728/var/run/redis.pid,\u4F60\u53EF\u4EE5\u914D\u7F6E\u5230\u5176\u4ED6\u5730\u5740\u3002\u5F53\u8FD0\u884C\u591A\u4E2A redis \u670D\u52A1\u65F6,\u9700\u8981\u6307\u5B9A\u4E0D\u540C\u7684 pid \u6587\u4EF6\u548C\u7AEF\u53E3\npidfile /var/run/redis.pid\n\n# Accept connections on the specified port, default is 6379.\n# If port 0 is specified Redis will not listen on a TCP socket.\n#\u7AEF\u53E3\u6CA1\u4EC0\u4E48\u597D\u8BF4\u7684\nport 6379\n\n# If you want you can bind a single interface, if the bind option is not\n# specified all the interfaces will listen for incoming connections.\n#\u6307\u5B9ARedis\u53EF\u63A5\u6536\u8BF7\u6C42\u7684IP\u5730\u5740,\u4E0D\u8BBE\u7F6E\u5C06\u5904\u7406\u6240\u6709\u8BF7\u6C42,\u5EFA\u8BAE\u751F\u4EA7\u73AF\u5883\u4E2D\u8BBE\u7F6E\n# bind 127.0.0.1\n\n# Close the connection after a client is idle for N seconds (0 to disable)\n#\u5BA2\u6237\u7AEF\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u95F4,\u5355\u4F4D\u4E3A\u79D2,\u8D85\u65F6\u540E\u4F1A\u5173\u95ED\u8FDE\u63A5\ntimeout 0\n\n# Specify the log file name. Also 'stdout' can be used to force\n# Redis to log on the standard output. Note that if you use standard\n# output for logging but daemonize, logs will be sent to /dev/null\n#\u914D\u7F6E log \u6587\u4EF6\u5730\u5740,\u9ED8\u8BA4\u6253\u5370\u5728\u547D\u4EE4\u884C\u7EC8\u7AEF\u7684\u7A97\u53E3\u4E0A\nlogfile stdout\n\n# Set the number of databases. The default database is DB 0, you can select\n# a different one on a per-connection basis using SELECT <dbid> where\n# dbid is a number between 0 and 'databases'-1\n#\u8BBE\u7F6E\u6570\u636E\u5E93\u7684\u4E2A\u6570,\u53EF\u4EE5\u4F7F\u7528 SELECT <dbid>\u547D\u4EE4\u6765\u5207\u6362\u6570\u636E\u5E93\u3002\u9ED8\u8BA4\u4F7F\u7528\u7684\u6570\u636E\u5E93\u662F 0\ndatabases 16\n\n\n\n#\n# Save the DB on disk:\n#\n# save <seconds> <changes>\n#\n# Will save the DB if both the given number of seconds and the given\n# number of write operations against the DB occurred.\n#\n# In the example below the behaviour will be to save:\n# after 900 sec (15 min) if at least 1 key changed\n# after 300 sec (5 min) if at least 10 keys changed\n# after 60 sec if at least 10000 keys changed\n#\n# Note: you can disable saving at all commenting all the \"save\" lines.\n#\u8BBE\u7F6E Redis \u8FDB\u884C\u6570\u636E\u5E93\u955C\u50CF\u7684\u9891\u7387\u3002\n#900\u79D2\u4E4B\u5185\u67091\u4E2Akeys\u53D1\u751F\u53D8\u5316\u65F6\n#30\u79D2\u4E4B\u5185\u670910\u4E2Akeys\u53D1\u751F\u53D8\u5316\u65F6\n#60\u79D2\u4E4B\u5185\u670910000\u4E2Akeys\u53D1\u751F\u53D8\u5316\u65F6\nsave 900 1\nsave 300 10\nsave 60 10000\n\n# Compress string objects using LZF when dump .rdb databases?\n# For default that's set to 'yes' as it's almost always a win.\n# If you want to save some CPU in the saving child set it to 'no' but\n# the dataset will likely be bigger if you have compressible values or keys.\n#\u5728\u8FDB\u884C\u955C\u50CF\u5907\u4EFD\u65F6,\u662F\u5426\u8FDB\u884C\u538B\u7F29\nrdbcompression yes\n\n# The filename where to dump the DB\n#\u955C\u50CF\u5907\u4EFD\u6587\u4EF6\u7684\u6587\u4EF6\u540D\ndbfilename dump.rdb\n\n# The working directory.\n#\n# The DB will be written inside this directory, with the filename specified\n# above using the 'dbfilename' configuration directive.\n#\xa0\n# Also the Append Only File will be created inside this directory.\n#\xa0\n# Note that you must specify a directory here, not a file name.\n#\u6570\u636E\u5E93\u955C\u50CF\u5907\u4EFD\u7684\u6587\u4EF6\u653E\u7F6E\u7684\u8DEF\u5F84\u3002\u8FD9\u91CC\u7684\u8DEF\u5F84\u8DDF\u6587\u4EF6\u540D\u8981\u5206\u5F00\u914D\u7F6E\u662F\u56E0\u4E3A Redis \u5728\u8FDB\u884C\u5907\u4EFD\u65F6,\u5148\u4F1A\u5C06\u5F53\u524D\u6570\u636E\u5E93\u7684\u72B6\u6001\u5199\u5165\u5230\u4E00\u4E2A\u4E34\u65F6\u6587\u4EF6\u4E2D,\u7B49\u5907\u4EFD\u5B8C\u6210\u65F6,\u518D\u628A\u8BE5\u8BE5\u4E34\u65F6\u6587\u4EF6\u66FF\u6362\u4E3A\u4E0A\u9762\u6240\u6307\u5B9A\u7684\u6587\u4EF6,\n#\u800C\u8FD9\u91CC\u7684\u4E34\u65F6\u6587\u4EF6\u548C\u4E0A\u9762\u6240\u914D\u7F6E\u7684\u5907\u4EFD\u6587\u4EF6\u90FD\u4F1A\u653E\u5728\u8FD9\u4E2A\u6307\u5B9A\u7684\u8DEF\u5F84\u5F53\u4E2D\ndir ./\n\n# Master-Slave replication. Use slaveof to make a Redis instance a copy of\n# another Redis server. Note that the configuration is local to the slave\n# so for example it is possible to configure the slave to save the DB with a\n# different interval, or to listen to another port, and so on.\n#\u8BBE\u7F6E\u8BE5\u6570\u636E\u5E93\u4E3A\u5176\u4ED6\u6570\u636E\u5E93\u7684\u4ECE\u6570\u636E\u5E93\n# slaveof <masterip> <masterport>\n\n# If the master is password protected (using the \"requirepass\" configuration\n# directive below) it is possible to tell the slave to authenticate before\n# starting the replication synchronization process, otherwise the master will\n# refuse the slave request.\n#\u6307\u5B9A\u4E0E\u4E3B\u6570\u636E\u5E93\u8FDE\u63A5\u65F6\u9700\u8981\u7684\u5BC6\u7801\u9A8C\u8BC1\n# masterauth <master-password>\n\n# Require clients to issue AUTH <PASSWORD> before processing any other\n# commands. This might be useful in environments in which you do not trust\n# others with access to the host running redis-server.\n#\n# This should stay commented out for backward compatibility and because most\n# people do not need auth (e.g. they run their own servers).\n#\xa0\n# Warning: since Redis is pretty fast an outside user can try up to\n# 150k passwords per second against a good box. This means that you should\n# use a very strong password otherwise it will be very easy to break.\n#\u8BBE\u7F6E\u5BA2\u6237\u7AEF\u8FDE\u63A5\u540E\u8FDB\u884C\u4EFB\u4F55\u5176\u4ED6\u6307\u5B9A\u524D\u9700\u8981\u4F7F\u7528\u7684\u5BC6\u7801\u3002\n\u8B66\u544A:redis\u901F\u5EA6\u76F8\u5F53\u5FEB,\u4E00\u4E2A\u5916\u90E8\u7684\u7528\u6237\u53EF\u4EE5\u5728\u4E00\u79D2\u949F\u8FDB\u884C150K\u6B21\u7684\u5BC6\u7801\u5C1D\u8BD5,\u4F60\u9700\u8981\u6307\u5B9A\u975E\u5E38\u975E\u5E38\u5F3A\u5927\u7684\u5BC6\u7801\u6765\u9632\u6B62\u66B4\u529B\u7834\u89E3\u3002\n\n# requirepass foobared\n\n\n# Set the max number of connected clients at the same time. By default there\n# is no limit, and it's up to the number of file descriptors the Redis process\n# is able to open. The special value '0' means no limits.\n# Once the limit is reached Redis will close all the new connections sending\n# an error 'max number of clients reached'.\n#\u9650\u5236\u540C\u65F6\u8FDE\u63A5\u7684\u5BA2\u6237\u6570\u91CF\u3002\u5F53\u8FDE\u63A5\u6570\u8D85\u8FC7\u8FD9\u4E2A\u503C\u65F6,redis \u5C06\u4E0D\u518D\u63A5\u6536\u5176\u4ED6\u8FDE\u63A5\u8BF7\u6C42,\u5BA2\u6237\u7AEF\u5C1D\u8BD5\u8FDE\u63A5\u65F6\u5C06\u6536\u5230 error \u4FE1\u606F\n# maxclients 128\n\n# Don't use more memory than the specified amount of bytes.\n# When the memory limit is reached Redis will try to remove keys\n# accordingly to the eviction policy selected (see maxmemmory-policy).\n#\n# If Redis can't remove keys according to the policy, or if the policy is\n# set to 'noeviction', Redis will start to reply with errors to commands\n# that would use more memory, like SET, LPUSH, and so on, and will continue\n# to reply to read-only commands like GET.\n#\n# This option is usually useful when using Redis as an LRU cache, or to set\n# an hard memory limit for an instance (using the 'noeviction' policy).\n#\n# WARNING: If you have slaves attached to an instance with maxmemory on,\n# the size of the output buffers needed to feed the slaves are subtracted\n# from the used memory count, so that network problems / resyncs will\n# not trigger a loop where keys are evicted, and in turn the output\n# buffer of slaves is full with DELs of keys evicted triggering the deletion\n# of more keys, and so forth until the database is completely emptied.\n#\n# In short\u2026 if you have slaves attached it is suggested that you set a lower\n# limit for maxmemory so that there is some free RAM on the system for slave\n# output buffers (but this is not needed if the policy is 'noeviction').\n#\u8BBE\u7F6Eredis\u80FD\u591F\u4F7F\u7528\u7684\u6700\u5927\u5185\u5B58\u3002\u5F53\u5185\u5B58\u6EE1\u4E86\u7684\u65F6\u5019,\u5982\u679C\u8FD8\u63A5\u6536\u5230set\u547D\u4EE4,redis\u5C06\u5148\u5C1D\u8BD5\u5254\u9664\u8BBE\u7F6E\u8FC7expire\u4FE1\u606F\u7684key,\u800C\u4E0D\u7BA1\u8BE5key\u7684\u8FC7\u671F\u65F6\u95F4\u8FD8\u6CA1\u6709\u5230\u8FBE\u3002\n#\u5728\u5220\u9664\u65F6,\u5C06\u6309\u7167\u8FC7\u671F\u65F6\u95F4\u8FDB\u884C\u5220\u9664,\u6700\u65E9\u5C06\u8981\u88AB\u8FC7\u671F\u7684key\u5C06\u6700\u5148\u88AB\u5220\u9664\u3002\u5982\u679C\u5E26\u6709expire\u4FE1\u606F\u7684key\u90FD\u5220\u5149\u4E86,\u90A3\u4E48\u5C06\u8FD4\u56DE\u9519\u8BEF\u3002\n#\u8FD9\u6837,redis\u5C06\u4E0D\u518D\u63A5\u6536\u5199\u8BF7\u6C42,\u53EA\u63A5\u6536get\u8BF7\u6C42\u3002maxmemory\u7684\u8BBE\u7F6E\u6BD4\u8F83\u9002\u5408\u4E8E\u628Aredis\u5F53\u4F5C\u4E8E\u7C7B\u4F3Cmemcached \u7684\u7F13\u5B58\u6765\u4F7F\u7528\n# maxmemory <bytes>\n\n# By default Redis asynchronously dumps the dataset on disk. If you can live\n# with the idea that the latest records will be lost if something like a crash\n# happens this is the preferred way to run Redis. If instead you care a lot\n# about your data and don't want to that a single record can get lost you should\n# enable the append only mode: when this mode is enabled Redis will append\n# every write operation received in the file appendonly.aof. This file will\n# be read on startup in order to rebuild the full dataset in memory.\n#\n# Note that you can have both the async dumps and the append only file if you\n# like (you have to comment the \"save\" statements above to disable the dumps).\n# Still if append only mode is enabled Redis will load the data from the\n# log file at startup ignoring the dump.rdb file.\n#\n# IMPORTANT: Check the BGREWRITEAOF to check how to rewrite the append\n# log file in background when it gets too big.\n#\u9ED8\u8BA4\u60C5\u51B5\u4E0B,redis \u4F1A\u5728\u540E\u53F0\u5F02\u6B65\u7684\u628A\u6570\u636E\u5E93\u955C\u50CF\u5907\u4EFD\u5230\u78C1\u76D8,\u4F46\u662F\u8BE5\u5907\u4EFD\u662F\u975E\u5E38\u8017\u65F6\u7684,\u800C\u4E14\u5907\u4EFD\u4E5F\u4E0D\u80FD\u5F88\u9891\u7E41,\u5982\u679C\u53D1\u751F\u8BF8\u5982\u62C9\u95F8\u9650\u7535\u3001\u62D4\u63D2\u5934\u7B49\u72B6\u51B5,\u90A3\u4E48\u5C06\u9020\u6210\u6BD4\u8F83\u5927\u8303\u56F4\u7684\u6570\u636E\u4E22\u5931\u3002\n#\u6240\u4EE5redis\u63D0\u4F9B\u4E86\u53E6\u5916\u4E00\u79CD\u66F4\u52A0\u9AD8\u6548\u7684\u6570\u636E\u5E93\u5907\u4EFD\u53CA\u707E\u96BE\u6062\u590D\u65B9\u5F0F\u3002\n#\u5F00 \u542Fappend only \u6A21\u5F0F\u4E4B\u540E,redis \u4F1A\u628A\u6240\u63A5\u6536\u5230\u7684\u6BCF\u4E00\u6B21\u5199\u64CD\u4F5C\u8BF7\u6C42\u90FD\u8FFD\u52A0\u5230appendonly.aof \u6587\u4EF6\u4E2D,\u5F53redis\u91CD\u65B0\u542F\u52A8\u65F6,\u4F1A\u4ECE\u8BE5\u6587\u4EF6\u6062\u590D\u51FA\u4E4B\u524D\u7684\u72B6\u6001\u3002\n#\u4F46\u662F\u8FD9\u6837\u4F1A\u9020\u6210 appendonly.aof \u6587\u4EF6\u8FC7\u5927,\u6240\u4EE5redis\u8FD8\u652F\u6301\u4E86BGREWRITEAOF \u6307\u4EE4,\u5BF9appendonly.aof\u8FDB\u884C\u91CD\u65B0\u6574\u7406\nappendonly no\n\n# The fsync() call tells the Operating System to actually write data on disk\n# instead to wait for more data in the output buffer. Some OS will really flush\xa0\n# data on disk, some other OS will just try to do it ASAP.\n#\n# Redis supports three different modes:\n#\n# no: don't fsync, just let the OS flush the data when it wants. Faster.\n# always: fsync after every write to the append only log . Slow, Safest.\n# everysec: fsync only if one second passed since the last fsync. Compromise.\n#\n# The default is \"everysec\" that's usually the right compromise between\n# speed and data safety. It's up to you to understand if you can relax this to\n# \"no\" that will will let the operating system flush the output buffer when\n# it wants, for better performances (but if you can live with the idea of\n# some data loss consider the default persistence mode that's snapshotting),\n# or on the contrary, use \"always\" that's very slow but a bit safer than\n# everysec.\n#\n# If unsure, use \"everysec\".\n#\u8BBE\u7F6E\u5BF9 appendonly.aof \u6587\u4EF6\u8FDB\u884C\u540C\u6B65\u7684\u9891\u7387\u3002always \u8868\u793A\u6BCF\u6B21\u6709\u5199\u64CD\u4F5C\u90FD\u8FDB\u884C\u540C\u6B65,everysec \u8868\u793A\u5BF9\u5199\u64CD\u4F5C\u8FDB\u884C\u7D2F\u79EF,\u6BCF\u79D2\u540C\u6B65\u4E00\u6B21\u3002\n# appendfsync always\nappendfsync everysec\n# appendfsync no\n\n# Virtual Memory allows Redis to work with datasets bigger than the actual\n# amount of RAM needed to hold the whole dataset in memory.\n# In order to do so very used keys are taken in memory while the other keys\n# are swapped into a swap file, similarly to what operating systems do\n# with memory pages.\n#\n# To enable VM just set 'vm-enabled' to yes, and set the following three\n# VM parameters accordingly to your needs.\n#\u662F\u5426\u5F00\u542F\u865A\u62DF\u5185\u5B58\u652F\u6301\u3002\u56E0\u4E3A redis \u662F\u4E00\u4E2A\u5185\u5B58\u6570\u636E\u5E93,\u800C\u4E14\u5F53\u5185\u5B58\u6EE1\u7684\u65F6\u5019,\u65E0\u6CD5\u63A5\u6536\u65B0\u7684\u5199\u8BF7\u6C42,\u6240\u4EE5\u5728redis2.0\u4E2D,\u63D0\u4F9B\u4E86\u865A\u62DF\u5185\u5B58\u7684\u652F\u6301\u3002\n#\u4F46\u662F\u9700\u8981\u6CE8\u610F\u7684\u662F,redis\u4E2D,\u6240\u6709\u7684key\u90FD\u4F1A\u653E\u5728\u5185\u5B58\u4E2D,\u5728\u5185\u5B58\u4E0D\u591F\u65F6,\u53EA\u4F1A\u628Avalue \u503C\u653E\u5165\u4EA4\u6362\u533A\u3002\n#\u8FD9\u6837\u4FDD\u8BC1\u4E86\u867D\u7136\u4F7F\u7528\u865A\u62DF\u5185\u5B58,\u4F46\u6027\u80FD\u57FA\u672C\u4E0D\u53D7\u5F71\u54CD,\u540C\u65F6,\u4F60\u9700\u8981\u6CE8\u610F\u7684\u662F\u4F60\u8981\u628Avm-max-memory\u8BBE\u7F6E\u5230\u8DB3\u591F\u6765\u653E\u4E0B\u4F60\u7684\u6240\u6709\u7684key\nvm-enabled no\n# vm-enabled yes\n\n# This is the path of the Redis swap file. As you can guess, swap files\n# can't be shared by different Redis instances, so make sure to use a swap\n# file for every redis process you are running. Redis will complain if the\n# swap file is already in use.\n#\n# The best kind of storage for the Redis swap file (that's accessed at random)\xa0\n# is a Solid State Disk (SSD).\n#\n# *** WARNING *** if you are using a shared hosting the default of putting\n# the swap file under /tmp is not secure. Create a dir with access granted\n# only to Redis user and configure Redis to create the swap file there.\n#\u8BBE\u7F6E\u865A\u62DF\u5185\u5B58\u7684\u4EA4\u6362\u6587\u4EF6\u8DEF\u5F84\nvm-swap-file /tmp/redis.swap\n\n# vm-max-memory configures the VM to use at max the specified amount of\n# RAM. Everything that deos not fit will be swapped on disk *if* possible, that\n# is, if there is still enough contiguous space in the swap file.\n#\n# With vm-max-memory 0 the system will swap everything it can. Not a good\n# default, just specify the max amount of RAM you can in bytes, but it's\n# better to leave some margin. For instance specify an amount of RAM\n# that's more or less between 60 and 80% of your free RAM.\n#\u8FD9\u91CC\u8BBE\u7F6E\u5F00\u542F\u865A\u62DF\u5185\u5B58\u4E4B\u540E,redis\u5C06\u4F7F\u7528\u7684\u6700\u5927\u7269\u7406\u5185\u5B58\u7684\u5927\u5C0F\u3002\u9ED8\u8BA4\u4E3A0,redis\u5C06\u628A\u4ED6\u6240\u6709\u7684\u80FD\u653E\u5230\u4EA4\u6362\u6587\u4EF6\u7684\u90FD\u653E\u5230\u4EA4\u6362\u6587\u4EF6\u4E2D,\u4EE5\u5C3D\u91CF\u5C11\u7684\u4F7F\u7528\u7269\u7406\u5185\u5B58\u3002\n#\u5728\u751F\u4EA7\u73AF\u5883\u4E0B,\u9700\u8981\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8BBE\u7F6E\u8BE5\u503C,\u6700\u597D\u4E0D\u8981\u4F7F\u7528\u9ED8\u8BA4\u7684 0\nvm-max-memory 0\n\n# Redis swap files is split into pages. An object can be saved using multiple\n# contiguous pages, but pages can't be shared between different objects.\n# So if your page is too big, small objects swapped out on disk will waste\n# a lot of space. If you page is too small, there is less space in the swap\n# file (assuming you configured the same number of total swap file pages).\n#\n# If you use a lot of small objects, use a page size of 64 or 32 bytes.\n# If you use a lot of big objects, use a bigger page size.\n# If unsure, use the default\xa0\n#\u8BBE\u7F6E\u865A\u62DF\u5185\u5B58\u7684\u9875\u5927\u5C0F,\u5982\u679C\u4F60\u7684 value \u503C\u6BD4\u8F83\u5927,\u6BD4\u5982\u8BF4\u4F60\u8981\u5728 value \u4E2D\u653E\u7F6E\u535A\u5BA2\u3001\u65B0\u95FB\u4E4B\u7C7B\u7684\u6240\u6709\u6587\u7AE0\u5185\u5BB9,\u5C31\u8BBE\u5927\u4E00\u70B9,\u5982\u679C\u8981\u653E\u7F6E\u7684\u90FD\u662F\u5F88\u5C0F\u7684\u5185\u5BB9,\u90A3\u5C31\u8BBE\u5C0F\u4E00\u70B9\nvm-page-size 32\n\n# Number of total memory pages in the swap file.\n# Given that the page table (a bitmap of free/used pages) is taken in memory,\n# every 8 pages on disk will consume 1 byte of RAM.\n#\n# The total swap size is vm-page-size * vm-pages\n#\n# With the default of 32-bytes memory pages and 134217728 pages Redis will\n# use a 4 GB swap file, that will use 16 MB of RAM for the page table.\n#\n# It's better to use the smallest acceptable value for your application,\n# but the default is large in order to work in most conditions.\n#\u8BBE\u7F6E\u4EA4\u6362\u6587\u4EF6\u7684\u603B\u7684 page \u6570\u91CF,\u9700\u8981\u6CE8\u610F\u7684\u662F,page table\u4FE1\u606F\u4F1A\u653E\u5728\u7269\u7406\u5185\u5B58\u4E2D,\u6BCF8\u4E2Apage \u5C31\u4F1A\u5360\u636ERAM\u4E2D\u7684 1 \u4E2A byte\u3002\n#\u603B\u7684\u865A\u62DF\u5185\u5B58\u5927\u5C0F = vm-page-size * vm-pages\nvm-pages 134217728\n\n# Max number of VM I/O threads running at the same time.\n# This threads are used to read/write data from/to swap file, since they\n# also encode and decode objects from disk to memory or the reverse, a bigger\n# number of threads can help with big objects even if they can't help with\n# I/O itself as the physical device may not be able to couple with many\n# reads/writes operations at the same time.\n#\n# The special value of 0 turn off threaded I/O and enables the blocking\n# Virtual Memory implementation.\n#\u8BBE\u7F6E VM IO \u540C\u65F6\u4F7F\u7528\u7684\u7EBF\u7A0B\u6570\u91CF\u3002\nvm-max-threads 4\n\n# Hashes are encoded in a special way (much more memory efficient) when they\n# have at max a given numer of elements, and the biggest element does not\n# exceed a given threshold. You can configure this limits with the following\n# configuration directives.\n#redis 2.0 \u4E2D\u5F15\u5165\u4E86 hash \u6570\u636E\u7ED3\u6784\u3002\xa0\n#hash \u4E2D\u5305\u542B\u8D85\u8FC7\u6307\u5B9A\u5143\u7D20\u4E2A\u6570\u5E76\u4E14\u6700\u5927\u7684\u5143\u7D20\u5F53\u6CA1\u6709\u8D85\u8FC7\u4E34\u754C\u65F6,hash \u5C06\u4EE5zipmap(\u53C8\u79F0\u4E3A small hash\u5927\u5927\u51CF\u5C11\u5185\u5B58\u4F7F\u7528)\u6765\u5B58\u50A8,\u8FD9\u91CC\u53EF\u4EE5\u8BBE\u7F6E\u8FD9\u4E24\u4E2A\u4E34\u754C\u503C\nhash-max-zipmap-entries 512\nhash-max-zipmap-value 64\n\n# Active rehashing uses 1 millisecond every 100 milliseconds of CPU time in\n# order to help rehashing the main Redis hash table (the one mapping top-level\n# keys to values). The hash table implementation redis uses (see dict.c)\n# performs a lazy rehashing: the more operation you run into an hash table\n# that is rhashing, the more rehashing \"steps\" are performed, so if the\n# server is idle the rehashing is never complete and some more memory is used\n# by the hash table.\n#\xa0\n# The default is to use this millisecond 10 times every second in order to\n# active rehashing the main dictionaries, freeing memory when possible.\n#\n# If unsure:\n# use \"activerehashing no\" if you have hard latency requirements and it is\n# not a good thing in your environment that Redis can reply form time to time\n# to queries with 2 milliseconds delay.\n#\n# use \"activerehashing yes\" if you don't have such hard requirements but\n# want to free memory asap when possible.\n#\u5F00\u542F\u4E4B\u540E,redis \u5C06\u5728\u6BCF 100 \u6BEB\u79D2\u65F6\u4F7F\u7528 1 \u6BEB\u79D2\u7684 CPU \u65F6\u95F4\u6765\u5BF9 redis \u7684 hash \u8868\u8FDB\u884C\u91CD\u65B0 hash,\u53EF\u4EE5\u964D\u4F4E\u5185\u5B58\u7684\u4F7F\u7528\u3002\n#\u5F53\u4F60\u7684\u4F7F\u7528\u573A\u666F\u4E2D,\u6709\u975E\u5E38\u4E25\u683C\u7684\u5B9E\u65F6\u6027\u9700\u8981,\u4E0D\u80FD\u591F\u63A5\u53D7 Redis \u65F6\u4E0D\u65F6\u7684\u5BF9\u8BF7\u6C42\u6709 2 \u6BEB\u79D2\u7684\u5EF6\u8FDF\u7684\u8BDD,\u628A\u8FD9\u9879\u914D\u7F6E\u4E3A no\u3002\n#\u5982\u679C\u6CA1\u6709\u8FD9\u4E48\u4E25\u683C\u7684\u5B9E\u65F6\u6027\u8981\u6C42,\u53EF\u4EE5\u8BBE\u7F6E\u4E3A yes,\u4EE5\u4FBF\u80FD\u591F\u5C3D\u53EF\u80FD\u5FEB\u7684\u91CA\u653E\u5185\u5B58\nactiverehashing yes\n\n",
              }),
            }),
          ],
        })
      }
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { wrapper: n } = Object.assign(
            {},
            (0, i.useMDXComponents)(),
            e.components
          )
        return n
          ? (0, t.jsx)(n, Object.assign({}, e, { children: (0, t.jsx)(o, e) }))
          : o(e)
      }
      ;(n.default = a),
        (a.__RSPRESS_PAGE_META = {}),
        (a.__RSPRESS_PAGE_META[
          '..%2Fsource%2F_posts%2F2024-03-07-redis-install-jumbo.md'
        ] = {
          toc: [
            {
              id: '1-\u4F7F\u7528jumbo\u5B89\u88C5jumbo-install-redis',
              text: '1. \u4F7F\u7528jumbo\u5B89\u88C5\uFF1Ajumbo install redis',
              depth: 3,
            },
            {
              id: '2-\u67E5\u770B\u5B89\u88C5\u7684\u6587\u4EF6\u4F4D\u7F6Ejumbo-list-files-redis',
              text: '2. \u67E5\u770B\u5B89\u88C5\u7684\u6587\u4EF6\u4F4D\u7F6E\uFF1Ajumbo list-files redis',
              depth: 3,
            },
            {
              id: '3-\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6homeworkjumboetcredisconf\u4E2D\u7684daemonize-yes\u901A\u8FC7\u8BE5\u914D\u7F6E\u9879\u4FEE\u6539\u4F7F\u7528yes\u542F\u7528\u5B88\u62A4\u8FDB\u7A0B',
              text: '3. \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6/home/work/.jumbo/etc/redis.conf\u4E2D\u7684daemonize yes\uFF0C\u901A\u8FC7\u8BE5\u914D\u7F6E\u9879\u4FEE\u6539\uFF0C\u4F7F\u7528yes\u542F\u7528\u5B88\u62A4\u8FDB\u7A0B',
              depth: 3,
            },
            {
              id: '4-\u6267\u884Credis-serverhomeworkjumboetcredisconf\u542F\u52A8redis',
              text: '4. \u6267\u884C./redis-server\xa0/home/work/.jumbo/etc/redis.conf,\u542F\u52A8redis',
              depth: 3,
            },
            {
              id: '5-\u6267\u884Credis-cli--h-localhost--p-6379\u5BF9redis\u8FDB\u884C\u6D4B\u8BD5',
              text: '5. \u6267\u884C./redis-cli -h localhost -p 6379\u5BF9redis\u8FDB\u884C\u6D4B\u8BD5',
              depth: 3,
            },
            {
              id: '6-redis\u914D\u7F6E\u8BE6\u89E3',
              text: '6. Redis\u914D\u7F6E\u8BE6\u89E3',
              depth: 3,
            },
          ],
          title: '',
          frontmatter: {
            layout: 'post',
            title: '\u4F7F\u7528jumbo\u5B89\u88C5redis',
            date: '2024-03-07T20:26:00.000Z',
            categories: ['\u6570\u636E\u5E93'],
            tags: ['redis', 'jumbo'],
          },
        })
    },
  },
])

/*! For license information please see 869.bf082783.js.LICENSE.txt */
;(self.webpackChunk_zhifou_rspress_blog =
  self.webpackChunk_zhifou_rspress_blog || []).push([
  ['869'],
  {
    3691: function (e, s, n) {
      'use strict'
      n.r(s)
      var a = n('35250'),
        r = n('51325')
      function l(e) {
        let s = Object.assign(
          { h3: 'h3', a: 'a', pre: 'pre', code: 'code' },
          (0, r.useMDXComponents)(),
          e.components
        )
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(s.h3, {
              id: '1mac\u4E0Bmysql\u672C\u673A\u8FDE\u63A5\u547D\u4EE4',
              children: [
                (0, a.jsx)(s.a, {
                  className: 'header-anchor',
                  'aria-hidden': 'true',
                  href: '#1mac\u4E0Bmysql\u672C\u673A\u8FDE\u63A5\u547D\u4EE4',
                  children: '#',
                }),
                '1.mac\u4E0Bmysql\u672C\u673A\u8FDE\u63A5\u547D\u4EE4',
              ],
            }),
            '\n',
            (0, a.jsx)(s.pre, {
              children: (0, a.jsx)(s.code, {
                className: 'language-shell',
                meta: '',
                children:
                  "[root@fifo ~]# mysql -u root -p\nEnter password:********\n******\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql>\n",
              }),
            }),
            '\n',
            (0, a.jsxs)(s.h3, {
              id: 'mac\u4E0Bmysql\u8FDC\u7A0B\u8FDE\u63A5\u547D\u4EE4',
              children: [
                (0, a.jsx)(s.a, {
                  className: 'header-anchor',
                  'aria-hidden': 'true',
                  href: '#mac\u4E0Bmysql\u8FDC\u7A0B\u8FDE\u63A5\u547D\u4EE4',
                  children: '#',
                }),
                'mac\u4E0Bmysql\u8FDC\u7A0B\u8FDE\u63A5\u547D\u4EE4',
              ],
            }),
            '\n',
            (0, a.jsx)(s.pre, {
              children: (0, a.jsx)(s.code, {
                className: 'language-sql',
                meta: '',
                children:
                  '[root@fifo ~]# mysql -h100.45.142.11 -P8030 -uzhifou_r -pzhifou_r\n',
              }),
            }),
            '\n',
            (0, a.jsxs)(s.h3, {
              id: '2mysql\u7684\u7B80\u5355\u547D\u4EE4',
              children: [
                (0, a.jsx)(s.a, {
                  className: 'header-anchor',
                  'aria-hidden': 'true',
                  href: '#2mysql\u7684\u7B80\u5355\u547D\u4EE4',
                  children: '#',
                }),
                '2.mysql\u7684\u7B80\u5355\u547D\u4EE4',
              ],
            }),
            '\n',
            (0, a.jsx)(s.pre, {
              children: (0, a.jsx)(s.code, {
                className: 'language-shell',
                meta: '',
                children:
                  'mysql> SHOW DATABASES;\n+----------+\n| Database |\n+----------+\n| mysql    |\n| test     |\n+----------+\n2 rows in set (0.13 sec)\n',
              }),
            }),
            '\n',
            (0, a.jsxs)(s.h3, {
              id: '3\u4E3Aroot\u8D26\u53F7\u4FEE\u6539\u5BC6\u7801',
              children: [
                (0, a.jsx)(s.a, {
                  className: 'header-anchor',
                  'aria-hidden': 'true',
                  href: '#3\u4E3Aroot\u8D26\u53F7\u4FEE\u6539\u5BC6\u7801',
                  children: '#',
                }),
                '3.\u4E3Aroot\u8D26\u53F7\u4FEE\u6539\u5BC6\u7801',
              ],
            }),
            '\n',
            (0, a.jsx)(s.pre, {
              children: (0, a.jsx)(s.code, {
                className: 'language-shell',
                meta: '',
                children:
                  '[root@host]# mysqladmin -u root password "new_password";\n',
              }),
            }),
            '\n',
            (0, a.jsxs)(s.h3, {
              id: '4\u67E5\u770Bmysql\u7248\u672C',
              children: [
                (0, a.jsx)(s.a, {
                  className: 'header-anchor',
                  'aria-hidden': 'true',
                  href: '#4\u67E5\u770Bmysql\u7248\u672C',
                  children: '#',
                }),
                '4.\u67E5\u770Bmysql\u7248\u672C',
              ],
            }),
            '\n',
            (0, a.jsx)(s.pre, {
              children: (0, a.jsx)(s.code, {
                className: 'language-shell',
                meta: '',
                children:
                  '[root@host]# mysqladmin --version\nmysqladmin  Ver 8.0.19 for macos10.15 on x86_64 (MySQL Community Server - GPL)\n',
              }),
            }),
          ],
        })
      }
      function t() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { wrapper: s } = Object.assign(
            {},
            (0, r.useMDXComponents)(),
            e.components
          )
        return s
          ? (0, a.jsx)(s, Object.assign({}, e, { children: (0, a.jsx)(l, e) }))
          : l(e)
      }
      ;(s.default = t),
        (t.__RSPRESS_PAGE_META = {}),
        (t.__RSPRESS_PAGE_META[
          '..%2Fsource%2F_posts%2F2024-03-05-mysql-connect-command.md'
        ] = {
          toc: [
            {
              id: '1mac\u4E0Bmysql\u672C\u673A\u8FDE\u63A5\u547D\u4EE4',
              text: '1.mac\u4E0Bmysql\u672C\u673A\u8FDE\u63A5\u547D\u4EE4',
              depth: 3,
            },
            {
              id: 'mac\u4E0Bmysql\u8FDC\u7A0B\u8FDE\u63A5\u547D\u4EE4',
              text: 'mac\u4E0Bmysql\u8FDC\u7A0B\u8FDE\u63A5\u547D\u4EE4',
              depth: 3,
            },
            {
              id: '2mysql\u7684\u7B80\u5355\u547D\u4EE4',
              text: '2.mysql\u7684\u7B80\u5355\u547D\u4EE4',
              depth: 3,
            },
            {
              id: '3\u4E3Aroot\u8D26\u53F7\u4FEE\u6539\u5BC6\u7801',
              text: '3.\u4E3Aroot\u8D26\u53F7\u4FEE\u6539\u5BC6\u7801',
              depth: 3,
            },
            {
              id: '4\u67E5\u770Bmysql\u7248\u672C',
              text: '4.\u67E5\u770Bmysql\u7248\u672C',
              depth: 3,
            },
          ],
          title: '',
          frontmatter: {
            layout: 'post',
            title: 'mac\u4E0Bmysql\u672C\u673A\u8FDE\u63A5\u547D\u4EE4',
            date: '2024-03-05T10:00:00.000Z',
            categories: ['\u6570\u636E\u5E93'],
            tags: ['mysql'],
          },
        })
    },
  },
])

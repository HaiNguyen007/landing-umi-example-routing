import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children:
      'https://hainguyen007.github.io/public-assets/img/quangcaoviet/quangcaoviet-logo-white-small.png',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '/',
          children: [
            {
              children: (
                <span>
                  <p>Trang Chủ</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '/page2',
          children: [
            {
              children: (
                <span>
                  <p>Tư Vấn</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: '#BangBaoGiaQCGoogle',
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>Bảng Báo Giá</p>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>Lợi Ích</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item~ks9wrfay4q8',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <p>Liên Hệ</p>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            'https://hainguyen007.github.io/public-assets/img/quangcaoviet/quangcaoviet-logo-white-small.png',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: (
                <span>
                  <p>
                    Quảng Cáo Google Cam Kết Chất Lượng, Hiệu Quả. Ngược lại
                    hoàn tiền 100%.
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>Dịch Vụ</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              name: 'link0',
              href: '#',
              children: (
                <span>
                  <p>Quảng Cáo Google</p>
                </span>
              ),
            },
            {
              name: 'link1',
              href: '#',
              children: (
                <span>
                  <p>Quảng Cáo Facebook</p>
                </span>
              ),
            },
            {
              name: 'link2',
              href: '#',
              children: (
                <span>
                  <p>Quảng Cáo Zalo</p>
                </span>
              ),
            },
            {
              name: 'link3',
              href: '#',
              children: (
                <span>
                  <p>Quảng Cáo Youtube</p>
                </span>
              ),
            },
            {
              name: 'link~ks9wauub62',
              href: '#',
              children: (
                <span>
                  <p>Quảng Cáo Gmail</p>
                </span>
              ),
            },
            {
              name: 'link~ks9wazsnqg',
              href: '#',
              children: (
                <span>
                  <span>
                    <p>Quảng Cáo Google Display</p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>Tư Vấn</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              href: '#',
              name: 'link0',
              children: (
                <span>
                  <p>Tư Vấn Từ Khóa</p>
                </span>
              ),
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <span>
                  <p>Cách Chọn Đối Tác Quảng Cáo</p>
                </span>
              ),
            },
            {
              href: '#',
              name: 'link~ks9wf0713ju',
              children: (
                <span>
                  <p>Vì Sao Điểm Chất Lượng Tối Quan Trọng</p>
                </span>
              ),
            },
            {
              href: '#',
              name: 'link~ks9wfki5mk',
              children: (
                <span>
                  <p>Tư Vấn Quảng Cáo Google</p>
                </span>
              ),
            },
            {
              href: '#',
              name: 'link~ks9wflofo7e',
              children: (
                <span>
                  <p>Tư Vấn Chiến Lược Quảng Cáo</p>
                </span>
              ),
            },
            {
              href: '#',
              name: 'link~ks9wfmti1l',
              children: (
                <span>
                  <p>Tư Vấn Chiến Lược Marketing</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>Chính Sách</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              href: '#',
              name: 'link0',
              children: (
                <span>
                  <p>Chính sách riêng tư</p>
                </span>
              ),
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <span>
                  <p>Chính sách bên thứ ba</p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>©2021 by QuangCaoViet.vn All Rights Reserved</span>
      </span>
    ),
  },
};

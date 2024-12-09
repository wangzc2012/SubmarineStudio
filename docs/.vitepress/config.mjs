import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/潜水艇.svg" }]],
  title: "SubmarineTeam",
  description: "SubmarineTeam",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    socialLinks: [
      {
        icon: {
          svg: '<svg t="1733749608167" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14020" width="200" height="200"><path d="M524.95050347 44.17066667c19.1722752-2.30436053 42.7228352-1.93566293 56.18029866 14.24094506 15.76182293 20.0940192 16.49921813 48.16112533 9.5861376 71.84994667-8.61830613 29.8184192-21.66098453 58.25422187-37.60715626 84.8465376-18.43488 31.20103467-44.1515392 57.10204267-68.71601707 83.4178336-21.3844608 23.3662112-47.10112 42.07761493-72.21864427 61.11162881-10.00092267 7.5583008-19.21836267 16.86791573-24.19578026 28.57406506-2.67305813 12.02875947 3.36436587 23.87317013 10.18527146 33.3671328 22.30620587 16.7757408 51.20288 23.82708267 70.55950507 44.65849814 17.60531093 17.8818336 29.081024 41.20195733 36.50106347 64.93686613 8.4800448 23.9192576-13.7800736 44.24371307-32.99843627 54.24463573-24.74882667 9.81657387-52.21679893 4.9774176-77.6569344 0.7373952-13.73398613-2.0278368-25.394048-10.09309653-35.44105707-19.21836266-29.03493653-26.40796587-57.14812907-53.87593813-84.52392746-82.03521814-23.7349088-26.6844896-50.281136-58.48465813-43.6445792-96.96747094 8.06525973-35.9019296 27.56014613-69.72993493 55.9498624-93.46484373 22.58272853-18.84966507 44.05936427-39.12803413 63.27772693-61.43423893 39.35846933-48.437648 72.12646933-101.990976 113.65103787-148.7233984 16.31486933-18.34270613 36.454976-35.07236053 61.1116288-40.141952z" p-id="14021"></path><path d="M492.96598613 328.3443488c-0.59913387-16.45313067 14.84007893-27.9749312 30.3714656-27.6062336 44.7045856-2.12001173 89.08656 9.44787627 133.837232 6.452208 14.5174688-0.27652373 30.002768-1.33652907 43.18370774 5.8991616 30.41755307 15.90008427 53.7837632 42.26196373 71.8038592 71.0203776 12.95050347 18.66531627 30.60190187 39.45064427 23.9192576 63.87686081-12.02875947 37.9297664-45.8106784 62.26380907-71.98820907 90.14656532-48.944608 45.39589333-93.1422336 95.49268053-139.27552107 143.6077184 11.982672 0.59913387 23.96534507 1.4747904 35.85584214 3.27219094-23.68882133-0.04608747-49.63591573-3.27219093-71.15863894 8.80265601-14.42529387 6.8209056-10.73831787 24.61056533-10.78440426 37.60715625-35.57931947 36.50106347-69.91428373 74.15430613-104.47968534 111.62320108-20.73924053 25.394048-45.8106784 47.60807893-61.43423893 76.87345172-7.9269984 12.95050347-14.60964267 28.25145387-28.85058773 35.48714454-19.77140907 10.92266667-43.36805653 8.1113472-65.07512854 8.15743466-25.48622187-1.42870293-56.96378027-2.2121856-72.49516693-26.08535572 1.33652907-24.05751893 16.49921813-43.4602304 29.2653728-62.67859414 27.46797227-39.5889056 58.85335573-76.18214293 90.423088-112.45277014 27.237536-28.15928 58.66900693-51.84810133 86.36741547-79.54650986 25.2096992-25.44013547 51.06461867-50.281136 75.26039893-76.68910187 42.49239893-45.16545707 87.7961184-87.93437973 126.18675733-136.78681387 6.77481813-7.32786453 3.8713248-17.6974848 3.9174112-26.63840213-34.9801856-15.6235616-66.54991893-37.97585387-97.47442986-60.37423359-17.60531093-11.6139744-30.41755307-32.30712747-27.37579734-53.96811201z" p-id="14022"></path><path d="M549.51498133 693.81585387c21.5227232-12.07484693 47.4698176-8.8487424 71.15863894-8.802656 32.53756373 4.33219733 63.41598827 21.29228693 83.32565973 47.56199254 22.4444672 29.40363413 40.74108587 61.6646752 59.72901227 93.32658133 20.9696768 33.27495893 54.3368096 57.47074027 71.52733653 93.28049599 4.7930688 8.06525973 3.3182784 17.60531093 3.59480107 26.5462272-7.7426496 6.95916693-15.0705152 16.591392-26.45405334 16.63747948-27.19144853 2.30436053-54.75159467 1.56696533-81.85086826-1.75131308-30.7401632-4.2400224-50.9724448-31.38538347-64.52208214-56.96378133-22.21403093-42.95327147-58.02378667-76.2282304-88.2109024-113.32842666-14.65573013-18.34270613-32.44538987-35.76366827-39.08194666-58.89944321 0.04608747-12.99659093-3.64088853-30.78625067 10.78440426-37.60715626z" p-id="14023"></path></svg>'
        },
        link: "https://www.luogu.com.cn/",
      },

      {
        icon: {
          svg: '<svg t="1733750605614" class="icon" viewBox="0 0 1070 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25211" width="200" height="200"><path d="M1067.287273 951.202909L667.182545 84.107636A105.006545 105.006545 0 0 0 572.043636 23.272727h-94.952727a34.909091 34.909091 0 0 0-31.650909 20.293818l-418.909091 907.636364a34.909091 34.909091 0 0 0 31.650909 49.524364h234.589091a105.006545 105.006545 0 0 0 95.092364-60.834909l44.730182-96.907637 278.667636 139.310546a175.476364 175.476364 0 0 0 78.056727 18.432h246.318546a34.909091 34.909091 0 0 0 31.650909-49.524364z m-742.818909-40.587636a35.048727 35.048727 0 0 1-31.650909 20.293818h-40.494546l66.792727-144.663273 51.060364 25.460364-45.707636 98.909091z m417.978181 9.216l-310.737454-155.368728-0.186182-0.09309-113.198545-56.599273-0.884364-0.418909a34.722909 34.722909 0 0 0-26.158545-1.489455h-0.046546a34.722909 34.722909 0 0 0-20.433454 18.478546L175.476364 930.909091H112.733091L499.432727 93.090909h62.743273L323.258182 610.816l-0.093091 0.325818a34.909091 34.909091 0 0 0 16.197818 45.521455l317.672727 158.859636a34.909091 34.909091 0 0 0 50.082909-36.677818c1.070545-0.512 0.232727-2.653091-2.792727-9.169455L585.355636 512l31.371637-67.956364L841.448727 930.909091h-52.130909a105.192727 105.192727 0 0 1-46.824727-11.077818zM546.909091 595.316364l52.270545 113.245091-84.945454-42.449455 32.674909-70.795636zM918.341818 930.909091l-269.963636-584.797091a34.909091 34.909091 0 0 0-63.255273-0.232727l-0.093091 0.232727-133.259636 288.721455-50.967273-25.460364L616.727273 141.498182 981.085091 930.909091H918.341818z" fill="#8a8a8a" p-id="25212"></path></svg>'
        },
        link: "https://atcoder.jp/",
      },

      {
        icon: {
          svg: '<svg t="1733749888070" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16078" width="200" height="200"><path d="M192 320A64 64 0 0 1 256 384v448A64 64 0 0 1 192 896h-128C28.714667 896 0 867.328 0 832V384c0-35.328 28.714667-64 64-64h128z m384-192A64 64 0 0 1 640 192v640a64 64 0 0 1-64 64h-128c-35.285333 0-64-28.672-64-64v-640c0-35.328 28.714667-64 64-64h128z m384 320A64 64 0 0 1 1024 512v320a64 64 0 0 1-64 64h-128a64 64 0 0 1-64-64V512a64 64 0 0 1 64-64h128z" fill="" p-id="16079"></path></svg>'
        },
        link: "https://codeforces.com/",
      },

      {
        icon: {
          svg: '<svg t="1733750801309" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27928" width="200" height="200"><path d="M785.066667 102.4c75.093333 0 136.533333 61.44 136.533333 136.533333 0 37.546667-13.653333 71.68-40.96 95.573334 23.893333 54.613333 40.96 112.64 40.96 177.493333 0 225.28-184.32 409.6-409.6 409.6S102.4 737.28 102.4 512c0-64.853333 13.653333-122.88 40.96-177.493333C116.053333 310.613333 102.4 276.48 102.4 238.933333c0-75.093333 61.44-136.533333 136.533333-136.533333 37.546667 0 71.68 13.653333 95.573334 40.96C389.12 116.053333 447.146667 102.4 512 102.4s122.88 13.653333 177.493333 40.96C713.386667 116.053333 747.52 102.4 785.066667 102.4z m0 68.266667c-17.066667 0-30.72 6.826667-44.373334 17.066666l-3.413333 3.413334-34.133333 34.133333-44.373334-20.48C614.4 180.906667 563.2 170.666667 512 170.666667c-47.786667 0-92.16 10.24-136.533333 27.306666l-10.24 6.826667-44.373334 20.48-34.133333-34.133333C273.066667 177.493333 256 170.666667 238.933333 170.666667c-37.546667 0-68.266667 30.72-68.266666 68.266666 0 17.066667 6.826667 30.72 17.066666 44.373334l3.413334 3.413333 34.133333 34.133333-20.48 44.373334C180.906667 409.6 170.666667 460.8 170.666667 512c0 187.733333 153.6 341.333333 341.333333 341.333333s341.333333-153.6 341.333333-341.333333c0-47.786667-10.24-92.16-27.306666-136.533333l-6.826667-10.24-20.48-44.373334 34.133333-34.133333c13.653333-13.653333 20.48-30.72 20.48-47.786667 0-37.546667-30.72-68.266667-68.266666-68.266666z m-136.533334 341.333333c17.066667 0 30.72 13.653333 34.133334 30.72v3.413333c0 95.573333-75.093333 170.666667-170.666667 170.666667s-170.666667-75.093333-170.666667-170.666667v-3.413333c3.413333-17.066667 17.066667-30.72 34.133334-30.72 20.48 0 34.133333 13.653333 34.133333 34.133333 0 58.026667 44.373333 102.4 102.4 102.4 54.613333 0 98.986667-40.96 102.4-95.573333V542.72c3.413333-17.066667 17.066667-30.72 34.133333-30.72z" fill="#8a8a8a" p-id="27929"></path></svg>'
        },
        link: "https://oier.team/",
      },

      {
        icon: {
          svg: '<svg t="1733750390243" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19269" width="200" height="200"><path d="M977.2 208.2c33.4 36.2 48.8 79.4 46.6 131.4v404.8c-0.8 52.8-18.4 96.2-53 130.2-34.4 34-78.2 51.8-131 53.4H184.04c-52.9-1.6-96.42-19.6-130.56-54.4C19.364 838.8 1.534 793 0 736.4V339.6c1.534-52 19.364-95.2 53.48-131.4 34.14-32.7 77.66-50.66 130.56-52.2h58.76l-50.7-51.62c-11.5-11.46-17.26-26-17.26-43.58 0-17.6 5.76-32.12 17.26-43.594C203.6 5.736 218.2 0 235.8 0s32.2 5.736 43.8 17.206L426.2 156h176l149-138.794C763.4 5.736 778.4 0 796 0c17.6 0 32.2 5.736 43.8 17.206C851.2 28.68 857 43.2 857 60.8c0 17.58-5.8 32.12-17.2 43.58L789.2 156h58.6c52.8 1.54 96 19.5 129.4 52.2z m-77.6 139.4c-0.8-19.2-7.4-34.8-21.4-47-10.4-12.2-28-18.8-45.4-19.6H192.1c-19.18 0.8-34.9 7.4-47.16 19.6-12.28 12.2-18.8 27.8-19.56 47v388.8c0 18.4 6.52 34 19.56 47S173.7 803 192.1 803h640.7c18.4 0 34-6.6 46.6-19.6 12.6-13 19.4-28.6 20.2-47V347.6zM371 433c12.6 12.6 19.4 28.2 20.2 46.4V546c-0.8 18.4-7.4 33.8-19.6 46.4-12.4 12.6-28 19-47.2 19-19.2 0-35-6.4-47.2-19-12.2-12.6-18.8-28-19.6-46.4v-66.6c0.8-18.2 7.6-33.8 20.2-46.4 12.6-12.6 26.4-19.2 46.6-20 18.4 0.8 34 7.4 46.6 20z m383 0c12.6 12.6 19.4 28.2 20.2 46.4V546c-0.8 18.4-7.4 33.8-19.6 46.4-12.2 12.6-28 19-47.2 19-19.2 0-34.8-6.4-47.2-19-14-12.6-18.8-28-19.4-46.4v-66.6c0.6-18.2 7.4-33.8 20-46.4 12.6-12.6 28.2-19.2 46.6-20 18.4 0.8 34 7.4 46.6 20z" p-id="19270"></path></svg>'
        },
        link: "https://www.bilibili.com/",
      },

      {
        icon: {
          svg: '<svg t="1733750745492" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26662" width="200" height="200"><path d="M512 64c247.136 0 448 200.864 448 448s-200.864 448-448 448S64 759.136 64 512 264.864 64 512 64z m0 832c211.968 0 384-172.032 384-384S723.968 128 512 128 128 300.032 128 512s172.032 384 384 384z m96-480a64 64 0 1 1 128 0 64 64 0 0 1-128 0zM288 416a64 64 0 1 1 128 0 64 64 0 0 1-128 0z m407.68 170.848c17.184 11.2 22.4 34.336 11.2 51.52A229.44 229.44 0 0 1 512 745.152a229.44 229.44 0 0 1-194.88-106.784 37.408 37.408 0 0 1 11.2-51.52 37.408 37.408 0 0 1 51.52 11.2A155.904 155.904 0 0 0 512 670.464c53.76 0 103.04-26.88 132.16-72.416 11.2-17.184 34.336-22.4 51.52-11.2z" fill="#8a8a8a" p-id="26663"></path></svg>'
        },
        link: "https://florr.io/",
      },

      { icon: 'github', link: 'https://github.com/wangzc2012/SubmarineTeam' },
    ],
    search: {
      provider:"local",
      options: {
        translations: {
          button:{
            buttonText: "搜索文档",
            buttonAriaLabel:"搜索文档",
          },
          modal: {
            noResultsText:"无法找到相关结果",
            resetButtonTitle:"清除查询条件",
            footer: {
              selectText:"选择",
              navigateText:"切换",
            },
          },
        },
      },
    },
    footer: {
      copyright: "此网站由 wangzc2012 开发，感谢 TzzlStudio 大力支持。",
    },

  }
})
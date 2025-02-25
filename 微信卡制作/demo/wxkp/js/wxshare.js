wx.ready(function () {
	
	    // 分享到朋友圈 - 使用新API
    wx.updateTimelineShareData({
        title: wstitle,
        link: wslink,
        imgUrl: wsimg,
        success: function () {
            //alert('分享成功');
            swal("分享成功");
        },
        cancel: function () {
        }
    });
	
	

    // 分享给朋友 - 使用新API
    wx.updateAppMessageShareData({
        title: wstitle,
        desc: wsdesc,
        link: wslink,
        imgUrl: wsimg,
        success: function () {
            //alert('分享成功');
            swal("分享成功");
        },
        cancel: function () {
        }
    });

    // 分享到QQ
    wx.onMenuShareQQ({
        title: wstitle,
        desc: wsdesc,
        link: qqlink,
        imgUrl: wsimg,
        success: function () {
            //alert('分享成功');
            swal("分享成功");
        },
        cancel: function () {
        }
    });

    // 微信点击腾讯微博
    wx.onMenuShareWeibo({
        title: wstitle,
        desc: wsdesc,
        link: wslink,
        imgUrl: wsimg,
        success: function () {
            //alert('分享成功');
            swal("分享成功");
        },
        cancel: function () {
        }
    });

    // QQ空间
    wx.onMenuShareQZone({
        title: wstitle,
        desc: wsdesc,
        link: wslink,
        imgUrl: wsimg,
        success: function () {
            //alert('分享成功');
			swal("分享成功");
        },
        cancel: function () {
        }
    });
	
	

});
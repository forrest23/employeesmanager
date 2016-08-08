var pref = "si";


var processed = 0;
Number.prototype.between = function(a, b) {
	return this >= a && this <= b
};

function Round(value, digits) {
	d = Math.pow(10, digits);//x的y次方
	return Math.round(value * d) / d//四舍五入
}
function Answer(ans) {
	$("#result").val(ans);
	processed = 1
}
function Answer2(ans) {
	$("#result2").val(ans)
}
function Answer3(ans) {
	$("#result3").val(ans)
}
function Answer4(ans) {
	$("#result4").val(ans)
}
function Answer5(ans) {
	$("#result5").val(ans)
}
function Text(txt) {
	$("#resultmsg").html(txt);
	processed = 1
}
function Text2(txt) {
	$("#resultmsg2").html(txt)
}
function Text3(txt) {
	$("#resultmsg3").html(txt)
}
function Text4(txt) {
	$("#resultmsg4").html(txt)
}
$(document).ready(function() {

	$('#article_title').text($('#title h2').text());//12.5


	$("#noneofthese").click(function() {
		var y = {};
		var req_radio_groups = {};
		$("tr.req td :radio").each(function() {
			$(this).style("border", "0px");
			req_radio_groups[this.name] = true
		});
		for (group in req_radio_groups) {
			if_checked = !! $(":radio[name=" + group + "]:checked").length;
			val = $(":radio[name=" + group + "]:checked").val();
			if (if_checked == false) {
				return false
			}
			if (if_checked == true) {
				y[group] = 0
			}
		}
		checkbox = $(".post form tr td input:checkbox");
		checkbox.each(function() {
			name = $(this).attr("name");
			y[name] = 0
		});
		inputs = $(".post form tr td input:text, .post form tr td input:checkbox:checked");
		inputs.each(function() {
			name = $(this).attr("name");
			val = $(this).val();
			y[name] = 0
		});
		$(".post form tr :checkbox").removeAttr("checked");
		$(".post form tr :radio").removeAttr("checked");
		$(".post form td ul li").removeClass("clicked");
		MDCalc(y)
	});
	$("table input:not([id])").each(function() {
		$(this).attr("id", $(this).attr("name"))
	});
	$(".post form tr.req td:last li").hover(function() {
		$(this).toggleClass("hoverclass")
	});
	$(".post form tr td").has(":checkbox").hover(function() {
		$(this).find("label").toggleClass("hoverclass")
	});
	$(".post form tr.req td li").click(function() {
		$(this).addClass("clicked").siblings("li").removeClass("clicked").end().find(":radio:eq(0)").attr("checked", "checked");
		Verify()
	});
	$(".post form tr[class!=answer]").has("input").hover(function() {
		$(this).children("td").toggleClass("texthover")
	});
	$(".post form tr td input:text").blur(function() {
		Verify()
	});
	$(".post form tr td input:radio, .post form tr td input:checkbox").change(function() {
		Verify()
	});
	$("#result").click(function() {
		Verify()
	});
	$(".post form select").change(function() {
		Verify()
	});
	inputs = $(".post form tr td input");

	function Verify() {
		if (processed == 1) {
			$(".post form tr.answer td div").each(function() {
				$(this).html("")
			});
			$(".post form tr.answer td input").each(function() {
				$(this).val("")
			})
		}
		var z = {};
		var req_radio_groups = {};
		$("tr.req td :radio").each(function() {
			req_radio_groups[this.name] = true
		});
		for (group in req_radio_groups) {
			if_checked = !! $(":radio[name=" + group + "]:checked").length;
			val = $(":radio[name=" + group + "]:checked").val();
			if (if_checked == false) {
				return false
			}
			if (if_checked == true) {
				if (val == 0 || val == "0") {
					z[group] = 0
				} else if (typeof(val % 2) == "number") {
					z[group] = val * 1
				} else if (typeof val == "string") {
					z[group] = val
				} else {
					z[group] = val * 1
				}
			}
		}
		var textreq = $("tr.req td input");
		var i = 0;
		textreq.each(function() {
			if ($(this).val().length > 0) {
				i++
			}
		});
		if (textreq.length == i) {
			checkbox = $(".post form tr td input:checkbox");
			checkbox.each(function() {
				name = $(this).attr("name");
				z[name] = 0
			});
			inputs = $(".post form tr td input:text, .post form tr td input:checkbox:checked");
			inputs.each(function() {
				name = $(this).attr("name");
				val = $(this).val();
				z[name] = val * 1
			});
			MDCalc(z);
			$("tr.answer input").each(function() {
				$(this).css("background", "#fff").css("color", "#0C5C8F")
			})
		}
	}
	var us = {};
	var si = {};
	us.ca = "mg/dL";
	us.alb = "g/dL";
	us.chol = "mg/dL";
	us.trig = "mg/dL";
	us.glu = "mg/dL";
	us.hct = "%";
	us.hgb = "g/dL";
	us.na = "mEq/L";
	us.k = "mEq/L";
	us.cl = "mEq/L";
	us.hco3 = "mEq/L";
	us.bun = "mg/dL";
	us.cr = "mg/dL";
	us.wt = "磅";
	us.ht = "英寸";
	us.crclearance = "mL/min";
	us.bili = "mg/dL";
	us.nadeficit = "mEq";
	us.osm = "mOsm/kg";
	us.pa02 = "mm Hg";
	us.pao2 = "mm Hg";
	us.tidal = "mL/kg";
	us.pheny = "mg/L";
	us.a1c = "% total hemoglobin";
	us.vrh = "平均动脉压";
	us.vrm = "中心静脉压";
	us.vrsvr = "SVR";
	us.vrsvri = "SVRI";
	si.ca = "mmol/L";
	si.alb = "g/L";
	si.chol = "mmol/L";
	si.trig = "mmol/L";
	si.glu = "mmol/L";
	si.hct = "fraction of RBCs";
	si.hgb = "g/L";
	si.na = "mmol/L";
	si.k = "mmol/L";
	si.cl = "mmol/L";
	si.hco3 = "mmol/L";
	si.bun = "mmol/L";
	si.cr = "&mu;mol/L";
	si.wt = "千克";
	si.ht = "厘米";
	si.crclearance = "mL/min";
	si.bili = "&mu;mol/L";
	si.nadeficit = "mmol";
	si.osm = "mmoI/kg";
	si.pao2 = "kPa";
	si.pa02 = "kPa";
	si.tidal = "mL/kg";
	si.pheny = "&mu;mol/L";
	si.a1c = "proportion total hemoglobin";
	si.vrh = "平均肺动脉压";
	si.vrm = "肺毛细血管契压";
	si.vrsvr = "PVR";
	si.vrsvri = "PVRI";
	if (pref == "si") {
		$('option[name="si"]').attr("selected", "selected");
		$("#theform tr td label[class]").each(function() {
			classs = $(this).attr("class");
			$(this).html(si[classs])
		})
	}
	if (pref == "us") {
		$('option[name="us"]').attr("selected", "selected");
		$("#theform tr td label[class]").each(function() {
			classs = $(this).attr("class");
			$(this).html(us[classs])
		})
	}
	$("#units").change(function() {
		pref = $(this).val();
		if (pref == "us") {
			$("#theform tr td label[class]").each(function() {
				classs = $(this).attr("class");
				$(this).html(us[classs])
			})
		}
		if (pref == "si") {
			$("#theform tr td label[class]").each(function() {
				classs = $(this).attr("class");
				$(this).html(si[classs])
			})
		}
		Verify()
	})
});
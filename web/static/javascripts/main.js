
$(function() {
	
	// Highlight the correct menu item
	$("ul.nav li[data-navpage="+serverData.page+"]").addClass("active");

	// Stop all forms from being submitted
	$("form").on("submit",function(e) {e.preventDefault();});

	$("button[type='call-update']").on("click",function(){
		var $form=$("form"); // Needs correcting
		vtx.update($(this).data("call"),$(this).data("id"),$form,function(data) {
			if (data.ok) {
				if (data.message) Notifier.success(data.message);
				if (data.redirect) window.location=data.redirect;
			} else {
				if (data.message) Notifier.error(data.message);
				if (data.errors) FormValidationErrors(data.errors,$form);
			}
		});
	});

	$("button[type='call-create']").on("click",function() {
		var $form=$("form"); // Needs correcting
		vtx.create($(this).data("call"),$form,function(data) {
			if (data.ok) {
				if (data.message) Notifier.success(data.message);
				if (data.redirect) window.location=data.redirect;
			} else {
				if (data.message) Notifier.error(data.message);
				if (data.errors) FormValidationErrors(data.errors,$form);
			}
		});
	});
});


var FormValidationErrors=function(errors,$form) {
	_.each(errors,function(err) {
		var $f=$form.find("[name='"+err.field+"']");
		if ($f.length) {
			$f.attr("title",err.message);
			$f.tipsy({gravity:'w',trigger: 'manual', fade: true}).tipsy("show");
			$f.on("change",function() {
				$f.tipsy("hide");
			});
		}
	});
};

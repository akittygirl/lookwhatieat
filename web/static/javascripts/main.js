
$(function() {
	
	// Highlight the correct menu item
	$("ul.nav li[data-navpage="+serverData.page+"]").addClass("active");

	$("form").on("submit",function(e) {
		e.preventDefault();
	});

	$("button[type='call-update']").on("click",function(){
		vtx.update($(this).data("call"),$(this).data("id"),$('form'),function(data) {
			if (data.ok) {
				if (data.redirect) {
					window.location=data.redirect;
				} else {
					if (data.message) Notifier.success(data.message);
						else Notifier.success("Update successful.");
				}
			} else {
				if (data.validationError) {
					console.log(data.validationError);
					if (data.validationError && data.validationError.errors) {
						_.each(data.validationError.errors,function(err) {
							Notifier.error(err.message,data.validationError.message);
						});
					} else {
						Notifier.error(data.validationError.message);
					}

				}
			}
		});
	});

	$("button[type='call-create']").on("click",function() {
		
		vtx.create($(this).data("call"),$("form"),function(data) {
			console.log(data);

			if (data.ok) {
				if (data.redirect) window.location=data.redirect;
			} else {
				if (data.message) Notifier.error(data.message);

			}


		});

		/*
		vtx.update($(this).data("call"),$(this).data("id"),$('form'),function(data) {
			if (data.ok) {
				if (data.redirect) {
					window.location=data.redirect;
				} else {
					if (data.message) Notifier.success(data.message);
						else Notifier.success("Update successful.");
				}
			} else {
				if (data.validationError) {
					console.log(data.validationError);
					if (data.validationError && data.validationError.errors) {
						_.each(data.validationError.errors,function(err) {
							Notifier.error(err.message,data.validationError.message);
						});
					} else {
						Notifier.error(data.validationError.message);
					}

				}
			}
		});
		*/
	});


});

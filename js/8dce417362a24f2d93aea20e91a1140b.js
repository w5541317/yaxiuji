function sbPyroCampaignMonitorSubscribeUser(nameID,emailID,optInID,formID){if($(formID).length>0){$(formID).submit(function(){$(formID).css('cursor','wait');$(formID+' input').css('cursor','wait');$(formID+' textarea').css('cursor','wait');$(formID+' select').css('cursor','wait');if($(optInID).is(':checked')){if($(nameID).val()!==''&&$(emailID).val()!==''){$.ajax({type:"POST",async:false,url:'/sb_pyro_campaign_monitor/subscribe_user',data:{'sbcm_name':$(nameID).val(),'sbcm_email':$(emailID).val()},dataType:'json',success:function(data){return true;}});}}
return true;});}}

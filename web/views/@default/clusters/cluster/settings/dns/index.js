Tea.context(function () {
	this.success = NotifyReloadSuccess("保存成功")

	this.domain = {id: this.domainId, name: this.domainName}
	this.changeDomain = function (domain) {
		this.domain.id = domain.id
		this.domain.name = domain.name
	}

	this.addCnameRecord = function (name) {
		this.$refs.cnameRecords.addValue(name)
	}
})
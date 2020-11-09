import RepositoryService from 'consul-ui/services/repository';
const modelName = 'service-instance';
export default class ServiceInstanceService extends RepositoryService {
  getModelName() {
    return modelName;
  }

  findByService(slug, dc, nspace, configuration = {}) {
    const query = {
      dc: dc,
      ns: nspace,
      id: slug,
    };
    if (typeof configuration.cursor !== 'undefined') {
      query.index = configuration.cursor;
      query.uri = configuration.uri;
    }
    return this.store.query(this.getModelName(), query);
  }

  findBySlug(serviceId, node, service, dc, nspace, configuration = {}) {
    const query = {
      dc: dc,
      ns: nspace,
      serviceId: serviceId,
      node: node,
      id: service,
    };
    if (typeof configuration.cursor !== 'undefined') {
      query.index = configuration.cursor;
      query.uri = configuration.uri;
    }
    return this.store.queryRecord(this.getModelName(), query);
  }
}
